import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedSpecModule } from '@oss-shared/modules/shared-spec.module';

import { ConfigureInstanceComponent } from './configure-instance.component';

describe('ConfigureInstanceComponent', () => {
  let component: ConfigureInstanceComponent;
  let fixture: ComponentFixture<ConfigureInstanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfigureInstanceComponent, SharedSpecModule],
    });
    fixture = TestBed.createComponent(ConfigureInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
