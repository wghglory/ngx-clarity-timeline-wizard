import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureServiceFormComponent } from './configure-service-form.component';

describe('ConfigureServiceFormComponent', () => {
  let component: ConfigureServiceFormComponent;
  let fixture: ComponentFixture<ConfigureServiceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfigureServiceFormComponent]
    });
    fixture = TestBed.createComponent(ConfigureServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
