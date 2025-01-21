import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-select-question',
  templateUrl: './select-question.component.html',
  styleUrls: ['./select-question.component.scss']
})
export class SelectQuestionComponent implements OnInit {
  surveys:any[] = ['Screening Criteria','In-Context Exposure Survey','Forced Exposure(common)','Last Exposure Survey'];
  select:any[] = ['Single Choice','Multiple Choice','Likert Scale','Free Text','Grid/Matrix','Image'];
  routes:any[] = ['single','multiple','likerscale','freetext','grid','image'];

  testData:any;

  constructor(private router: Router,private api:ApiService) { }

  ngOnInit(): void {
    this.getallQs();
  }
  navigate(i:any){
    const data = `/${this.routes[i]}`;
    console.log(data);
    this.router.navigate([`/${this.routes[i]}`])
  }
  getallQs(){
    this.api.viewQs().subscribe((res)=>{
      console.log(res);
      this.testData = res.data;
    })
    
  }

}
