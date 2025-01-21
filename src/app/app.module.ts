import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent, SingleQuestionComponent } from './single-question/single-question.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MultipleQuestionComponent } from './multiple-question/multiple-question.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { SelectQuestionComponent } from './select-question/select-question.component';
import { IlkertScaleQuestionComponent } from './ilkert-scale-question/ilkert-scale-question.component';
import { GridQuestionComponentComponent } from './grid-question-component/grid-question-component.component';
import { ImageQuestionComponent } from './image-question/image-question.component';
import { FreetextQuestionComponent } from './freetext-question/freetext-question.component';
import { AppSurveyPreviewComponent } from './app-survey-preview/app-survey-preview.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PreviewSingleComponent } from './preview-single/preview-single.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleQuestionComponent,
    MultipleQuestionComponent,
    LoginComponent,
    DialogComponent,
    SelectQuestionComponent,
    IlkertScaleQuestionComponent,
    GridQuestionComponentComponent,
    ImageQuestionComponent,
    FreetextQuestionComponent,
    AppSurveyPreviewComponent,
    PreviewSingleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule
  ],
  exports:[
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
