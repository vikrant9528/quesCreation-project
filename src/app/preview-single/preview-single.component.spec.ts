import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSingleComponent } from './preview-single.component';

describe('PreviewSingleComponent', () => {
  let component: PreviewSingleComponent;
  let fixture: ComponentFixture<PreviewSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
