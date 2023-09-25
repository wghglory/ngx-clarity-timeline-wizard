import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineWizardLiveComponent } from '../shared/components/timeline-wizard-live-draft/timeline-wizard.component';
import { ClarityModule, ClrTimelineModule, ClrTimelineStepState } from '@clr/angular';
import { ConfigureDatabaseFormComponent } from '../configure-database-form/configure-database-form.component';
import { TimelineContentDirective } from '../shared/components/timeline-wizard-live-draft/timeline-content.directive';
import { ConfigureServiceFormComponent } from '../configure-service-form/configure-service-form.component';
import { ConfigureReviewComponent } from '../configure-review/configure-review.component';
import { TimelineContentComponent } from '../shared/components/timeline-wizard-live-draft/timeline-content/timeline-content.component';

@Component({
  selector: 'app-configure-instance-live',
  standalone: true,
  imports: [
    CommonModule,
    ClarityModule,
    ClrTimelineModule,
    TimelineContentDirective,
    TimelineWizardLiveComponent,
    ConfigureDatabaseFormComponent,
    ConfigureServiceFormComponent,
    ConfigureReviewComponent,
    TimelineContentComponent,
  ],
  templateUrl: './configure-instance-live.component.html',
  styleUrls: ['./configure-instance-live.component.scss'],
})
export class ConfigureInstanceLiveComponent {
  ClrTimelineStepState = ClrTimelineStepState;

  timelineSteps: any[] = [
    {
      state: ClrTimelineStepState.SUCCESS,
      title: 'setup.configureDb',
    },
    {
      state: ClrTimelineStepState.CURRENT,
      title: 'setup.configureService',
    },
    {
      state: ClrTimelineStepState.NOT_STARTED,
      title: 'Summary',
    },
  ];
}
