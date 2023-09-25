import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineWizardComponent } from './timeline-wizard.component';

describe('TimelineWizardComponent', () => {
  let component: TimelineWizardComponent;
  let fixture: ComponentFixture<TimelineWizardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TimelineWizardComponent],
    });
    fixture = TestBed.createComponent(TimelineWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
