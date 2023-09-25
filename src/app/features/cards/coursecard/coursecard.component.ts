import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { course } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.scss']
})
export class CoursecardComponent implements OnChanges {
  @Input()
  course = {"title":"hello"} as course;
  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
