import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurePlatformComponent } from './configure-platform.component';

describe('ConfigurePlatformComponent', () => {
  let component: ConfigurePlatformComponent;
  let fixture: ComponentFixture<ConfigurePlatformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfigurePlatformComponent]
    });
    fixture = TestBed.createComponent(ConfigurePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
