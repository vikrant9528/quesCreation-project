import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleQuestionComponent } from './single-question/single-question.component';
import { LoginComponent } from './login/login.component';
import { MultipleQuestionComponent } from './multiple-question/multiple-question.component';
import { SelectQuestionComponent } from './select-question/select-question.component';
import { IlkertScaleQuestionComponent } from './ilkert-scale-question/ilkert-scale-question.component';
import { GridQuestionComponentComponent } from './grid-question-component/grid-question-component.component';
import { ImageQuestionComponent } from './image-question/image-question.component';
import { FreetextQuestionComponent } from './freetext-question/freetext-question.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'select',component:SelectQuestionComponent},
  {path:'single',component:SingleQuestionComponent},
  {path:'multiple',component:MultipleQuestionComponent},
  {path:'likerscale',component:IlkertScaleQuestionComponent},
  {path:'freetext',component:FreetextQuestionComponent},
  {path:'grid',component:GridQuestionComponentComponent},
  {path:'image' , component:ImageQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
