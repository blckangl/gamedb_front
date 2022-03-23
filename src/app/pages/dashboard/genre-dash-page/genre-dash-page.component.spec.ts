import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreDashPageComponent } from './genre-dash-page.component';

describe('GenreDashPageComponent', () => {
  let component: GenreDashPageComponent;
  let fixture: ComponentFixture<GenreDashPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreDashPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreDashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
