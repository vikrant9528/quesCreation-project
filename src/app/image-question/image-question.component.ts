import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../single-question/single-question.component';

@Component({
  selector: 'app-image-question',
  templateUrl: './image-question.component.html',
  styleUrls: ['./image-question.component.scss']
})
export class ImageQuestionComponent implements OnInit {
  surveys:any[] = ['Screening Criteria','In-Context Exposure Survey','Forced Exposure(common)','Last Exposure Survey'];
   imageQuestionForm: FormGroup;
  formData: any;
  array2: any;
  payload:any[] =[];
  show:boolean = false;
   constructor(private _fb: FormBuilder,private _api:ApiService,private dialog:MatDialog) {}
 
   ngOnInit(): void {
     this.validateImageQuestionForm();
   }
 
   validateImageQuestionForm(){
     this.imageQuestionForm = this._fb.group({
       qs_cns_id:['16783'],
       qs_question: ['', Validators.required],
       qs_type: ['image'],
       SPSS: [''],
      options: this._fb.array([])
     });
   }
 
   get dynamicFields(): FormArray {
     return this.imageQuestionForm.get('options') as FormArray;
   }

   createOptions(): FormGroup {
    return this._fb.group({
      option: [''],
      children: [],
      optionImage: ["",[Validators.required]],
      opt_flags: this._fb.group({
        opt_reject: [0],
      }),
    });
  }
 
   addOptions(type?:string) {
    const options = this.imageQuestionForm.get("options") as FormArray;
    options.push(this.createOptions());
    // this.show = !this.show;
   }
 
 
 
   delete(index){
     this.dynamicFields.removeAt(index);
   }
 

  handleInputChange(event: any, index: number): void {
    const file = event.target.files[0];
    if (file && (file.type.match("image/png") || file.type.match("image/jpg") || file.type.match("image/jpeg"))) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string;
        const options = this.imageQuestionForm.get('options') as FormArray;
        options.at(index).patchValue({ optionImage: imageUrl });
        // this.show = !this.show;
      };
  
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type. Please upload an image.");
    }
  }
  
  addMoreOptions(): void {
    const options = this.imageQuestionForm.get("options") as FormArray;
    options.push(this.createOptions());
    console.log(options);
  }
    
 
   onSubmit() {
    if (this.imageQuestionForm.valid) {
      this.payload = [this.imageQuestionForm.value]
      console.log(this.payload);
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
