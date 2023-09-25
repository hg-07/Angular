import { Component ,OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PaidcourselistService } from 'src/app/shared/services/paidcourselist.service';
import { MycoursecardComponent } from '../../cards/mycoursecard/mycoursecard.component';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.scss']
})
export class MycoursesComponent implements OnInit{

  @ViewChild('paidcourselist', { read: ViewContainerRef })
  container!: ViewContainerRef;

  courseslist = [];
  count=0;
  constructor(private paidcourses:PaidcourselistService) { }


  ngOnInit(): void {
    setTimeout(() => {
      this.paidcourses.get().subscribe((data) => {
        this.courseslist = data;
        console.log(this.courseslist)
        for (let i = this.count; i < (6+this.count); i++) {
          const ref = this.container.createComponent(MycoursecardComponent);
          ref.setInput("course",this.courseslist[i]);
        }
        this.count+=6
      });
    });
  }
  showMore() {
    for (let i = this.count; i < (6+this.count); i++) {
      const ref = this.container.createComponent(MycoursecardComponent);
      ref.setInput("course",this.courseslist[i]);

    }
    this.count+=6;
  }

}
