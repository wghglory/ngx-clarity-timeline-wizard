/* eslint-disable @typescript-eslint/no-explicit-any */
import { Type } from '@angular/core';
import { ClrTimelineStepDescription, ClrTimelineStepHeader, ClrTimelineStepState, ClrTimelineStepTitle } from '@clr/angular';

import { TimelineBaseComponent } from './timeline-base.component';

export interface TimelineStep {
  state: ClrTimelineStepState;
  header?: ClrTimelineStepHeader;
  title: ClrTimelineStepTitle;
  description?: ClrTimelineStepDescription;
}
