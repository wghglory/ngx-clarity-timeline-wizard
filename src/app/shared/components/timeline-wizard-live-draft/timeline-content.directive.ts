import { ComponentRef, Directive, ElementRef, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { TimelineBaseComponent } from './timeline-base.component';

@Directive({
  selector: '[appTimelineContent]',
  standalone: true,
})
export class TimelineContentDirective {
  constructor(private ele: ElementRef) {}
}
