import { HttpErrorResponse } from '@angular/common/http';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  computed,
  ContentChildren,
  effect,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  WritableSignal,
} from '@angular/core';
import { ClarityModule, ClrTimelineModule, ClrTimelineStep, ClrTimelineStepState } from '@clr/angular';
import { debounceTime, distinctUntilChanged, Subject, Subscription, switchMap, tap } from 'rxjs';

import { TimelineStep } from './timeline.model';
import { TimelineBaseComponent } from './timeline-base.component';
import { CommonModule } from '@angular/common';
import { api } from '../../operators/api.operator';
import { TimelineContentDirective } from './timeline-content.directive';
import { ConfigureDatabaseFormComponent } from 'src/app/configure-database-form/configure-database-form.component';
import { TimelineContentComponent } from './timeline-content/timeline-content.component';

@Component({
  selector: 'app-timeline-wizard-live',
  standalone: true,
  imports: [ClarityModule, ClrTimelineModule, CommonModule],
  templateUrl: './timeline-wizard.component.html',
  styleUrls: ['./timeline-wizard.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default, // due to form change status, OnPush needs manual change detection
})
export class TimelineWizardLiveComponent {
  constructor() {
    effect(() => {
      console.log('eff', this.steps());
    });
  }
  // dynamic component container
  @ContentChildren(ClrTimelineStep, { descendants: true }) clrSteps!: QueryList<ClrTimelineStep>;

  // @ContentChildren(TimelineBaseComponent) stepContents!: QueryList<TimelineBaseComponent>;
  @ContentChildren(TimelineContentDirective) stepContents!: QueryList<TimelineContentDirective>;
  @ContentChildren(TimelineContentComponent, { descendants: true }) test2!: QueryList<TimelineContentDirective>;

  // emit all data when clicking the Finish/confirm in the last step
  @Output() finished = new EventEmitter();

  // source of truth, maintaining all steps data
  steps: WritableSignal<TimelineStep[]> = signal([]);

  get currentStepFormInvalid() {
    // if (!this.currentComponentRef) {
    //   return true;
    // }
    // // review component, not a form component
    // if (this.currentComponentRef.instance.form === null) {
    //   return false;
    // }

    // return this.currentComponentRef.instance.form.valid === false;
    return false;
  }

  updateTimeline() {
    this.steps().forEach((step, i) => {
      const clrTimelineStep = this.clrSteps.get(i);

      if (clrTimelineStep) {
        clrTimelineStep.state = step.state;
        clrTimelineStep.stepTitle.nativeElement.innerText = step.title;
      }
    });
  }

  updateUI() {
    this.updateTimeline();
    this.updateStepContents();
  }

  updateStepContents = () => {
    // console.log(this.stepContents);
    if (this.stepContents) {
      this.stepContents.forEach(c => {
        c['ele'].nativeElement.style.display = 'none';
      });

      const activeStepContent = this.stepContents.find((item, index) => index === this.currentStepIndex());
      if (activeStepContent) activeStepContent['ele'].nativeElement.style.display = 'block';
    }
  };

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
  // stepsData = computed(() =>
  //   this.steps()
  //     .map(item => item.data)
  //     .filter(Boolean),
  // );

  private cdr = inject(ChangeDetectorRef);
  private currentComponentRef: ComponentRef<TimelineBaseComponent> | null = null;
  private componentSub: Subscription | undefined;
  private nextClick$ = new Subject<void>(); // next step button click trigger

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

  ngAfterContentInit() {
    setTimeout(() => {
      this.steps.set(
        this.clrSteps.map(s => ({
          state: s.state,
          title: s.stepTitle.nativeElement.textContent,
        })),
      );

      this.updateStepContents();
    });
    console.log(this.test2);

    // 1. make sure Clarity inputs rendered correctly if OnPush
    // 2. fix step component form expressed value error
    // this.cdr.detectChanges();
  }

  ngAfterViewInit() {}

  // click next step button
  nextStep() {
    if (this.isLastStep()) {
      // emit all previous steps' data to parent
      // this.finished.emit(this.stepsData());
    }

    this.nextClick$.next();
  }

  // click previous step button
  previousStep() {
    if (this.isFirstStep()) {
      return;
    }

    this.steps.mutate(steps => {
      // change current step as "not started"
      const currentStep = steps[this.currentStepIndex()];
      currentStep.state = ClrTimelineStepState.NOT_STARTED;
      currentStep.description = ''; // clear error

      // move to prev step, set it as "current"
      const prevStep = steps[this.currentStepIndex() - 1];
      prevStep.state = ClrTimelineStepState.CURRENT;
    });
    this.updateUI();
  }

  /**
   * container.clear() will destroy the component, but we want to display the previous form data like clicking prev button.
   * This function will save and populate data.
   * each component's form data will be saved into the corresponding step. Again, steps are the single source of truth.
   * If the last step is a review component, input all previous steps' data into it. So review component can display them and send API.
   * @param cmpRef a component ref
   */
  // private initComponent(cmpRef: ComponentRef<TimelineBaseComponent>) {
  //   // for a form step component, fill in the step data
  //   if (cmpRef.instance.form) {
  //     // defer patchValue, wait for component's form initialization
  //     setTimeout(() => cmpRef.instance.form!.patchValue(this.currentStep().data));

  //     // hook form data into step data
  //     this.componentSub = cmpRef.instance.form.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe(data => {
  //       this.steps.mutate(steps => {
  //         const currentStep = steps[this.currentStepIndex()];
  //         currentStep.data = data;
  //       });
  //     });
  //   }

  //   // last step review component
  //   if (this.isLastStep()) {
  //     // emit all data to the last review component if existing
  //     cmpRef.setInput('data', this.stepsData());
  //     return;
  //   }

  //   // form steps, pass step data into the component
  //   if (this.currentStep().data) {
  //     cmpRef.setInput('data', this.currentStep().data);
  //   }
  // }

  private beforeAsyncOperation() {
    // when clicking finish button, clear error (description = ''), set processing state
    this.steps.mutate(steps => {
      const currentStep = steps[this.currentStepIndex()];
      currentStep.state = ClrTimelineStepState.PROCESSING;
      currentStep.description = '';
    });
  }

  private setStepAsError(err: HttpErrorResponse) {
    // set current step error
    this.steps.mutate(steps => {
      const currentStep = steps[this.currentStepIndex()];
      currentStep.state = ClrTimelineStepState.ERROR;
      currentStep.description = err.message;
    });
  }

  private moveToNextStep() {
    if (this.isLastStep()) {
      return;
    }

    this.steps.mutate(steps => {
      // change current step as "success"
      const currentStep = steps[this.currentStepIndex()];
      currentStep.state = ClrTimelineStepState.SUCCESS;

      // move to next step, set it as "current"
      const nextStep = steps[this.currentStepIndex() + 1];
      nextStep.state = ClrTimelineStepState.CURRENT;
    });
    this.updateUI();
  }
}
