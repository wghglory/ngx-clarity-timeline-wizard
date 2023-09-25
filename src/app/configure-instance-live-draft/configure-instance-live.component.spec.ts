import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureInstanceLiveComponent } from './configure-instance-live.component';

describe('ConfigureInstanceLiveComponent', () => {
  let component: ConfigureInstanceLiveComponent;
  let fixture: ComponentFixture<ConfigureInstanceLiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfigureInstanceLiveComponent]
    });
    fixture = TestBed.createComponent(ConfigureInstanceLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
