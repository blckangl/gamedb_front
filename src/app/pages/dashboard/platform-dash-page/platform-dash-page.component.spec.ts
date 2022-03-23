import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformDashPageComponent } from './platform-dash-page.component';

describe('PlatformDashPageComponent', () => {
  let component: PlatformDashPageComponent;
  let fixture: ComponentFixture<PlatformDashPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformDashPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformDashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
