import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipFeedbackComponent } from './pip-feedback.component';

describe('PipFeedbackComponent', () => {
  let component: PipFeedbackComponent;
  let fixture: ComponentFixture<PipFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
