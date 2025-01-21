import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-single',
  templateUrl: './preview-single.component.html',
  styleUrls: ['./preview-single.component.scss']
})
export class PreviewSingleComponent implements OnInit {
  @Input() survey:any = ''

  constructor() { }

  ngOnInit(): void {
  }

}
