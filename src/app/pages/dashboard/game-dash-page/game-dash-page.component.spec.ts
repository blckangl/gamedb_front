import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDashPageComponent } from './game-dash-page.component';

describe('GameDashPageComponent', () => {
  let component: GameDashPageComponent;
  let fixture: ComponentFixture<GameDashPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDashPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
