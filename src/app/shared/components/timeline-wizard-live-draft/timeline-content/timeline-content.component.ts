import { Component, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-content.component.html',
  styleUrls: ['./timeline-content.component.scss'],
})
export class TimelineContentComponent {
  @ContentChild('#cmp')
  cmp: any;

  ngAfterContentInit() {
    console.log(this.cmp);
  }
}
