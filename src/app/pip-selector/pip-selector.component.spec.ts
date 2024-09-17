import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipSelectorComponent } from './pip-selector.component';

describe('PipSelectorComponent', () => {
  let component: PipSelectorComponent;
  let fixture: ComponentFixture<PipSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
