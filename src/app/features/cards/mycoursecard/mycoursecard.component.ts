import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { courseprogress } from 'src/app/core/models/courseprogress.model';

@Component({
  selector: 'app-mycoursecard',
  templateUrl: './mycoursecard.component.html',
  styleUrls: ['./mycoursecard.component.scss']
})
export class MycoursecardComponent {
  @Input()
  course = {"title":"hello"} as courseprogress;
  
  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
