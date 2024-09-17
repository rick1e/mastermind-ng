import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessFeedbackDisplayComponent } from './guess-feedback-display.component';

describe('GuessFeedbackDisplayComponent', () => {
  let component: GuessFeedbackDisplayComponent;
  let fixture: ComponentFixture<GuessFeedbackDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessFeedbackDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessFeedbackDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
