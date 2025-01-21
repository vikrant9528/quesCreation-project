import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../single-question/single-question.component';

@Component({
  selector: 'app-ilkert-scale-question',
  templateUrl: './ilkert-scale-question.component.html',
  styleUrls: ['./ilkert-scale-question.component.scss']
})
export class IlkertScaleQuestionComponent implements OnInit {

 surveys:any[] = ['Screening Criteria','In-Context Exposure Survey','Forced Exposure(common)','Last Exposure Survey'];
   likertScaleForm: FormGroup;
   specialtypes = ['others', 'freetext', 'exclusive', 'none'];
   likertRange:any[] = [1,2,3,4,5];
   num_value = 5;
   payload:any[] = [];

   constructor(private _fb: FormBuilder,private _api:ApiService,private dialog:MatDialog) {}
 
   ngOnInit(): void {
     this.validationLikertScaleForm();
   }
 
   validationLikertScaleForm(){
     this.likertScaleForm = this._fb.group({
       qs_cns_id:['16783'],
       qs_question: ['', Validators.required],
       qs_type: ['numeric'],
       SPSS: [''],
       not_like:[''],
       extreme_like:['']
     })
   }

   incounter(){
    this.likertRange.push(this.likertRange.length+1);
    this.num_value = this.likertRange.length;
    console.log(this.num_value);
   }
   decounter(){
    this.likertRange.pop();
    this.num_value = this.likertRange.length;
    console.log(this.num_value);
   }
 
   onSubmit() {
    if (this.likertScaleForm.valid) {
      const allData = {num_value:this.num_value,...this.likertScaleForm.value}
      this.payload = [allData]
      console.log('Form Submitted:',this.payload);
      this._api.AddQs('crud/addquestion' , this.payload).subscribe(res=>{
        console.log(res);
      })
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
