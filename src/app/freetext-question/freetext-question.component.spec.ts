import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreetextQuestionComponent } from './freetext-question.component';

describe('FreetextQuestionComponent', () => {
  let component: FreetextQuestionComponent;
  let fixture: ComponentFixture<FreetextQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreetextQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreetextQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
