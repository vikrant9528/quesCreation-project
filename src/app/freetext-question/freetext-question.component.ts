import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../single-question/single-question.component';

@Component({
  selector: 'app-freetext-question',
  templateUrl: './freetext-question.component.html',
  styleUrls: ['./freetext-question.component.scss']
})
export class FreetextQuestionComponent implements OnInit {

  surveys: any[] = ['Screening Criteria', 'In-Context Exposure Survey', 'Forced Exposure(common)', 'Last Exposure Survey'];
  freeTextQuestionForm: FormGroup;
  payload: any[] = [];
  type: any = 'freetext';
  optionRange: any[] = ['1'];
  option_value = 1;
  // questionType:any[] = ['Default freetext','Multiple freetext'];
  questionType: any[] = [{
    type: 'Default freetext',
    value: 'freetext'
  }, {
    type: 'Multiple freetext',
    value: 'multiple-freetext'
  }]
  constructor(private _fb: FormBuilder, private _api: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.validateSingleQuestionForm();
    // for(let i = 0 ; i < 1 ; i++ ){
    //   this.addOptions('normal');
    //  }
  }
  qsType(e) {
    this.type = e.target.value;
    console.log(this.type);
    this.validateSingleQuestionForm();
  }
  incounter() {
    this.optionRange.push(this.optionRange.length + 1);
    this.option_value = this.optionRange.length;
    console.log(this.option_value);
  }
  decounter() {
    this.optionRange.pop();
    this.option_value = this.optionRange.length;
    console.log(this.option_value);
  }


  validateSingleQuestionForm() {
    console.log(this.type);
    if (this.type == 'freetext') {
      this.freeTextQuestionForm = this._fb.group({
        qs_cns_id: ['16788'],
        qs_question: ['', Validators.required],
        qs_type: ['freetext'],
        SPSS: [''],

      });
    } else if (this.type == 'multiple-freetext') {
      this.freeTextQuestionForm = this._fb.group({
        qs_cns_id: ['16785'],
        qs_question: ['', Validators.required],
        qs_type: ['multiple-freetext'],
        SPSS: [''],
      });
    }
  }

  get dynamicFields(): FormArray {
    return this.freeTextQuestionForm.get('options') as FormArray;
  }









  onSubmit() {
    if (this.freeTextQuestionForm.valid) {
      if (this.type == 'freetext') {
        this.payload.push(this.freeTextQuestionForm.value);
        console.log(this.payload);
        this._api.AddQs('crud/addquestion', this.payload).subscribe(res => {
          console.log(res);
        })
      }
      else if (this.type == 'multiple-freetext') {
        const qs_flags = { show_options: this.option_value }
        const allData = { qs_flags, ...this.freeTextQuestionForm.value }
        this.payload = [allData]
        console.log(this.payload);
        this._api.AddQs('crud/addquestion', this.payload).subscribe(res => {
          console.log(res);
        })
      }
    }
    else {
      console.log('Form is invalid');
    }
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      height: '300px',
      width: '300px',
      data: {
        type: 'radio',
        placeholder: 'Q. What is your favorite season?',
        season: ['Summer', 'Winter', 'Autumn', 'Spring']
      }
    });
  }


}
