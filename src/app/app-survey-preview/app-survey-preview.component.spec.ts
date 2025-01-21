import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSurveyPreviewComponent } from './app-survey-preview.component';

describe('AppSurveyPreviewComponent', () => {
  let component: AppSurveyPreviewComponent;
  let fixture: ComponentFixture<AppSurveyPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSurveyPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSurveyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
