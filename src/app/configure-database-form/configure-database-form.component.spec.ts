import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureDatabaseFormComponent } from './configure-database-form.component';

describe('ConfigureDatabaseFormComponent', () => {
  let component: ConfigureDatabaseFormComponent;
  let fixture: ComponentFixture<ConfigureDatabaseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfigureDatabaseFormComponent]
    });
    fixture = TestBed.createComponent(ConfigureDatabaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
