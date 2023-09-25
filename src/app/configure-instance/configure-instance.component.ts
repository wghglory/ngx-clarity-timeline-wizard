import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { ClarityModule, ClrTimelineStepState } from '@clr/angular';
import { ConfigureDatabaseFormComponent } from '../configure-database-form/configure-database-form.component';
import { ConfigurePlatformComponent } from '../configure-platform/configure-platform.component';
import { ConfigureReviewComponent } from '../configure-review/configure-review.component';
import { ConfigureServiceFormComponent } from '../configure-service-form/configure-service-form.component';
import { TimelineWizardComponent } from '../shared/components/timeline-wizard/timeline-wizard.component';
import { TimelineStep } from '../shared/components/timeline-wizard/timeline.model';

@Component({
  selector: 'app-configure-instance',
  standalone: true,
  imports: [CommonModule, ClarityModule, TimelineWizardComponent],
  templateUrl: './configure-instance.component.html',
  styleUrls: ['./configure-instance.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ConfigureInstanceComponent {
  @Input({ required: true }) id = '';
  private state = inject(Location).getState() as { name: string };

  get instanceName() {
    return this.state.name;
  }

  timelineSteps: TimelineStep[] = [
    {
      state: ClrTimelineStepState.CURRENT,
      title: 'setup.configurePlatform',
      component: ConfigurePlatformComponent,
      data: null,
    },
    {
      state: ClrTimelineStepState.NOT_STARTED,
      title: 'setup.configureService',
      component: ConfigureServiceFormComponent,
      data: null,
    },
    {
      state: ClrTimelineStepState.NOT_STARTED,
      title: 'setup.configureDb',
      component: ConfigureDatabaseFormComponent,
    },

    {
      state: ClrTimelineStepState.NOT_STARTED,
      title: 'Summary',
      component: ConfigureReviewComponent,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFinish(data: unknown[]) {}
}
