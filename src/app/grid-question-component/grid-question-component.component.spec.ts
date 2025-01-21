import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridQuestionComponentComponent } from './grid-question-component.component';

describe('GridQuestionComponentComponent', () => {
  let component: GridQuestionComponentComponent;
  let fixture: ComponentFixture<GridQuestionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridQuestionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridQuestionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
