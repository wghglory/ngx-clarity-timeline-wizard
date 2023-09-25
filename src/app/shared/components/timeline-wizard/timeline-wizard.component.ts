import { HttpErrorResponse } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  computed,
  EmbeddedViewRef,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
  ViewChild,
  ViewContainerRef,
  WritableSignal,
} from '@angular/core';
import { ClarityModule, ClrTimelineStepState } from '@clr/angular';
import { debounceTime, distinctUntilChanged, Subject, Subscription, switchMap, tap } from 'rxjs';

import { TimelineStep } from './timeline.model';
import { TimelineBaseComponent } from './timeline-base.component';
import { CommonModule } from '@angular/common';
import { api } from '../../operators/api.operator';

@Component({
  selector: 'app-timeline-wizard',
  standalone: true,
  imports: [ClarityModule, CommonModule],
  templateUrl: './timeline-wizard.component.html',
  styleUrls: ['./timeline-wizard.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default, // due to form change status, OnPush needs manual change detection
})
export class TimelineWizardComponent implements AfterViewInit {
  // dynamic component container
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  /**
   * Controls whether to destroy step components when clicking prev/next buttons
   * By default, live is false, will destroy step component.
   * Sometimes if we know user wants to quickly switch between steps, live can be true, next button won't destroy prev component.
   */
  @Input() live = false;

  @Input({ required: true }) set timelineSteps(value: TimelineStep[]) {
    this.steps.set(value);
  }

  // emit all data when clicking the finish button in the last step
  @Output() finished = new EventEmitter();

  // source of truth, maintaining all steps data
  steps: WritableSignal<TimelineStep[]> = signal([]);

  get currentComponentRef() {
    return this.componentRefMap[this.currentStepIndex()];
  }

  get currentStepFormInvalid() {
    if (!this.currentComponentRef) {
      return true;
    }
    // review component, not a form component
    if (this.currentComponentRef.instance.form === null) {
      return false;
    }

    return this.currentComponentRef.instance.form.valid === false;
  }

  /**
   * current, error, processing step can appear once at a time, as the current step
   */
  currentStepIndex = computed(() =>
    this.steps().findIndex(i =>
      [ClrTimelineStepState.CURRENT, ClrTimelineStepState.ERROR, ClrTimelineStepState.PROCESSING].includes(i.state),
    ),
  );
  currentStep = computed(() => this.steps()[this.currentStepIndex()]);
  isFirstStep = computed(() => this.currentStepIndex() === 0);
  isLastStep = computed(() => this.currentStepIndex() === this.steps().length - 1);

  /**
   * all steps data to be reviewed, usually send it as payload for final submission
   * data is hooked into step data
   * last review component doesn't have form, no data, filter it out
   */
  stepsData = computed(() =>
    this.steps()
      .map(item => item.data)
      .filter(Boolean),
  );

  private cdr = inject(ChangeDetectorRef);

  // step index as key, componentRef as value
  private componentRefMap: Record<number, ComponentRef<TimelineBaseComponent>> = {};

  private subscriptions: Subscription[] = [];

  // next step button click trigger
  private nextClick$ = new Subject<void>();

  /**
   * when clicking next/finish button,
   * 1) clear previous error, set state as PROCESSING
   * 2) hook into the specific component's observable that could be either synchronous or asynchronous.
   */
  next$ = this.nextClick$.pipe(
    tap(() => this.beforeAsyncOperation()),
    switchMap(() =>
      // fly into the component for API call
      this.currentComponentRef!.instance.next$.pipe(
        api(
          () => {
            !this.isLastStep() && this.moveToNextStep();
          },
          err => this.setStepAsError(err),
        ),
      ),
    ),
  );

  // wait for container exists in DOM
  ngAfterViewInit() {
    this.renderComponent();

    // 1. make sure Clarity inputs rendered correctly if OnPush
    // 2. fix step component form expressed value error
    this.cdr.detectChanges();
  }

  renderComponent() {
    this.subscriptions.forEach(s => s.unsubscribe());
    if (this.live === false) {
      this.container.clear();
    }

    // create dynamic component
    const cmpRef = this.container.createComponent(this.currentStep().component);

    // save current component ref, so we know if form is valid
    this.componentRefMap = { ...this.componentRefMap, [this.currentStepIndex()]: cmpRef };

    this.initComponent(cmpRef);
  }

  // click next step button
  nextStep() {
    if (this.isLastStep()) {
      // emit all previous steps' data to parent
      this.finished.emit(this.stepsData());
    }

    this.nextClick$.next();
  }

  // click previous step button
  previousStep() {
    if (this.isFirstStep()) {
      return;
    }

    /**
     * change data source, update timeline, this should execute first before other logic,
     * because it change CURRENT, which affect currentStepIndex
     */
    this.steps.mutate(steps => {
      // change current step as "not started"
      const currentStep = steps[this.currentStepIndex()];
      currentStep.state = ClrTimelineStepState.NOT_STARTED;
      currentStep.description = ''; // clear error

      // move to prev step, set it as "current"
      const prevStep = steps[this.currentStepIndex() - 1];
      prevStep.state = ClrTimelineStepState.CURRENT; // note that code will affect currentStepIndex
    });

    /**
     * update dynamic components. Note currentStepIndex was changed above.
     * if live is true, change display of old and new components.
     * else renderComponent by destroying old one.
     */
    if (this.live) {
      // change DOM display
      const currentElement = this.container.get(this.currentStepIndex() + 1) as EmbeddedViewRef<TimelineBaseComponent>;
      const prevElement = this.container.get(this.currentStepIndex()) as EmbeddedViewRef<TimelineBaseComponent>;

      currentElement.rootNodes[0].style.display = 'none';
      prevElement.rootNodes[0].style.display = 'block';
    } else {
      this.renderComponent();
    }
  }

  /**
   * container.clear() will destroy the component, but we want to display the previous form data like clicking prev button.
   * This function will save and populate data.
   * each component's form data will be saved into the corresponding step. Again, steps are the single source of truth.
   * If the last step is a review component, input all previous steps' data into it. So review component can display them and send API.
   * @param cmpRef a component ref
   */
  private initComponent(cmpRef: ComponentRef<TimelineBaseComponent>) {
    // for a form step component, fill in the step data
    if (cmpRef.instance.form) {
      // defer patchValue, wait for component's form initialization
      setTimeout(() => cmpRef.instance.form!.patchValue(this.currentStep().data));

      // hook form data into step data
      this.subscriptions.push(
        cmpRef.instance.form.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe(data => {
          this.steps.mutate(steps => {
            const currentStep = steps[this.currentStepIndex()];
            currentStep.data = data;
          });
        }),
      );
    }

    // last step review component
    if (this.isLastStep()) {
      // emit all data to the last review component if existing
      cmpRef.setInput('data', this.stepsData());
      return;
    }

    // form steps, pass step data into the component
    if (this.currentStep().data) {
      cmpRef.setInput('data', this.currentStep().data);
    }
  }

  /**
   *  when clicking next/finish button, clear error (description = ''), set processing state
   */
  private beforeAsyncOperation() {
    this.steps.mutate(steps => {
      const currentStep = steps[this.currentStepIndex()];
      currentStep.state = ClrTimelineStepState.PROCESSING;
      currentStep.description = '';
    });
  }

  /**
   * set current step error
   * @param err
   */
  private setStepAsError(err: HttpErrorResponse) {
    this.steps.mutate(steps => {
      const currentStep = steps[this.currentStepIndex()];
      currentStep.state = ClrTimelineStepState.ERROR;
      currentStep.description = err.message;
    });
  }

  /**
   * Move to the next step in the process.
   *
   * This function changes the data source and updates the timeline. It should execute
   * before any other logic because it changes the value of CURRENT, which affects
   * the currentStepIndex.
   *
   * @return {void}
   */
  private moveToNextStep() {
    if (this.isLastStep()) {
      return;
    }

    /**
     * change data source, update timeline, this should execute first before other logic,
     * because it change CURRENT, which affect currentStepIndex
     */
    this.steps.mutate(steps => {
      // change current step as "success"
      const currentStep = steps[this.currentStepIndex()];
      currentStep.state = ClrTimelineStepState.SUCCESS;

      // move to next step, set it as "current"
      const nextStep = steps[this.currentStepIndex() + 1];
      nextStep.state = ClrTimelineStepState.CURRENT;
    });

    /**
     * update dynamic components. Note currentStepIndex was changed above.
     * if live is true, change display of old and new components.
     * else renderComponent by destroying old one.
     */
    if (this.live) {
      const nextElement = this.container.get(this.currentStepIndex()) as EmbeddedViewRef<TimelineBaseComponent>;
      const currentElement = this.container.get(this.currentStepIndex() - 1) as EmbeddedViewRef<TimelineBaseComponent>;
      currentElement.rootNodes[0].style.display = 'none';

      if (nextElement) {
        // next element exists, no need to create component
        nextElement.rootNodes[0].style.display = 'block';
      } else {
        // next button click will create a new component
        this.renderComponent();
      }
    } else {
      this.renderComponent();
    }
  }
}
