import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDashPageComponent } from './category-dash-page.component';

describe('CategoryDashPageComponent', () => {
  let component: CategoryDashPageComponent;
  let fixture: ComponentFixture<CategoryDashPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDashPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
