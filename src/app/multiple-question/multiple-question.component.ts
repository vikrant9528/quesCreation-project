import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../single-question/single-question.component';


@Component({
  selector: 'app-multiple-question',
  templateUrl: './multiple-question.component.html',
  styleUrls: ['./multiple-question.component.scss']
})
export class MultipleQuestionComponent implements OnInit {

   surveys:any[] = ['Screening Criteria','In-Context Exposure Survey','Forced Exposure(common)','Last Exposure Survey'];
   multipleQuestionForm: FormGroup;
   specialtypes = ['others', 'freetext', 'exclusive', 'none'];
   payload:any[] = [];
   constructor(private _fb: FormBuilder,private _api:ApiService,private dialog:MatDialog) {}
 
   ngOnInit(): void {
     this.validateSingleQuestionForm();
     for(let i = 0 ; i < 3 ; i++ ){
      this.addOptions('normal');
     }
   }
 
   validateSingleQuestionForm(){
     this.multipleQuestionForm = this._fb.group({
       qs_cns_id:['16783'],
       qs_question: ['', Validators.required],
       qs_type: ['multiple'],
       SPSS: [''],
      
       options: this._fb.array([
         this._fb.group({
           opt_option:['',Validators.required],
           SPSS:[''],
           opt_type:['normal']
         })
       ])
     });
   }
 
   get dynamicFields(): FormArray {
     return this.multipleQuestionForm.get('options') as FormArray;
   }
 
   addOptions(type:string) {
     this.dynamicFields.push(this._fb.group({
       opt_option:['',Validators.required],
       SPSS:[''],
       opt_type:type
     }));
   }
 
 
 
   delete(index){
     this.dynamicFields.removeAt(index);
   }
 
   onSubmit() {
     if (this.multipleQuestionForm.valid) {
      this.payload = [this.multipleQuestionForm.value];
       console.log('Form Submitted:', this.payload);
       this._api.AddQs('crud/addquestion' , this.payload).subscribe(res=>{
         console.log(res);
       })
     } else {
       console.log('Form is invalid');
     }
   }
 
 
   openDialog() {
    this.dialog.open(DialogComponent, {
      height: '400px',
      width: '400px',
      data:{
        type:'checkbox',
        placeholder:'Q. Which words would you use to describe the video? Select all that apply',
        season:['Sad','Entertaining','Funny','Scary','Boring']
      }
    });
  }
 
}
