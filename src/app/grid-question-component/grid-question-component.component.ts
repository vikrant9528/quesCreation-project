import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../single-question/single-question.component';

@Component({
  selector: 'app-grid-question-component',
  templateUrl: './grid-question-component.component.html',
  styleUrls: ['./grid-question-component.component.scss']
})
export class GridQuestionComponentComponent implements OnInit {

surveys:any[] = ['Screening Criteria','In-Context Exposure Survey','Forced Exposure(common)','Last Exposure Survey'];
  gridQuestionForm: FormGroup;
  specialtypes = ['others', 'freetext', 'exclusive', 'none'];
  payload:any[]=[];
  questionType:any[] = ['Default Grid','Grid Multiple','Grid Freetext'];
  constructor(private _fb: FormBuilder,private _api:ApiService,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.validateSingleQuestionForm();
    for(let i = 0 ; i < 1 ; i++ ){
      this.addOptions('normal');
      this.addValues('normal');
     }
  }


  validateSingleQuestionForm(){
    this.gridQuestionForm = this._fb.group({
      qs_cns_id:['167866'],
      qs_question: ['', Validators.required],
      qs_type: ['grid'],
      SPSS: [''],
      DISTRO:[''],
     
      options: this._fb.array([
        this._fb.group({
          opt_option:['',Validators.required],
          SPSS:[''],
          opt_type:['normal'],
          DISTRO:[''],
        })
      ]),
      values: this._fb.array([
        this._fb.group({
          gr_value:['',Validators.required],
          SPSS:[''],
          gr_type:['normal'],
          DISTRO:['']
        })
      ])
    });
    

  }

  get dynamicFields(): FormArray {
    return this.gridQuestionForm.get('options') as FormArray;
  }
  get valueFields(): FormArray {
    return this.gridQuestionForm.get('values') as FormArray;
  }

  addOptions(type:string) {
    this.dynamicFields.push(this._fb.group({
      opt_option:['',Validators.required],
      SPSS:[''],
      opt_type:type
    }));
  }

  addValues(type:string) {
    this.valueFields.push(this._fb.group({
      gr_value:['',Validators.required],
      SPSS:[''],
      gr_type:type
    }));
  }


  deleteValues(index , type){
    if(type == 'option'){
      console.log('option hit')
      this.dynamicFields.removeAt(index);
    }
    else if(type == 'value'){
      console.log('value hit');
      this.valueFields.removeAt(index);
    }else{
      console.log('error')
    }
  }

  onSubmit() {
    if (this.gridQuestionForm.valid) {
      this.payload.push(this.gridQuestionForm.value);
      console.log(this.payload);
      this._api.AddQs('crud/addquestion',this.payload).subscribe(res=>{
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
