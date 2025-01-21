import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-preview',
  templateUrl: './app-survey-preview.component.html',
  styleUrls: ['./app-survey-preview.component.scss']
})
export class AppSurveyPreviewComponent implements OnInit {
  @Input() data:any = '';

  
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.getQuestion();
    },3000)

  }
  getQuestion(){
    console.log(this.data,'i am inside app-survey')
  }


}
