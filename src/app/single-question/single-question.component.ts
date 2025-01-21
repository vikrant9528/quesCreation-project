
import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
;

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent implements OnInit { 
  surveys:any[] = ['Screening Criteria','In-Context Exposure Survey','Forced Exposure(common)','Last Exposure Survey'];
  singleQuestionForm: FormGroup;
  specialtypes = ['others', 'freetext', 'exclusive', 'none'];
  payload:any[]=[];
  constructor(private _fb: FormBuilder,private _api:ApiService,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.validateSingleQuestionForm();
    for(let i = 0 ; i < 3 ; i++ ){
      this.addOptions('normal');
     }
  }

  validateSingleQuestionForm(){
    this.singleQuestionForm = this._fb.group({
      qs_cns_id:['11113'],
      qs_question: ['', Validators.required],
      qs_type: ['single'],
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
    return this.singleQuestionForm.get('options') as FormArray;
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
    if (this.singleQuestionForm.valid) {
      this.payload.push(this.singleQuestionForm.value);
      console.log(this.payload);
      this._api.AddQs('crud/addquestion' ,this.payload).subscribe(res=>{
        console.log(res);
      })
    } else {
      console.log('Form is invalid');
    }
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      height: '300px',
      width: '300px',
      data:{
        type:'radio',
        placeholder:'Q. What is your favorite season?',
        season:['Summer','Winter','Autumn','Spring']
      }
    });
  }

}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./single-question.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialogRef: MatDialogRef<DialogComponent>) {
    console.log(data)
   }

  ngOnInit(): void {
    console.log(this.data);
  }

}