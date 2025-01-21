import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlkertScaleQuestionComponent } from './ilkert-scale-question.component';

describe('IlkertScaleQuestionComponent', () => {
  let component: IlkertScaleQuestionComponent;
  let fixture: ComponentFixture<IlkertScaleQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlkertScaleQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlkertScaleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
