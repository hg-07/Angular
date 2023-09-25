import {  Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { CoursecardComponent } from '../coursecard/coursecard.component';


@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.scss']
})
export class AllcoursesComponent implements OnInit {
  @ViewChild('courselist', { read: ViewContainerRef })
  container!: ViewContainerRef;


  courseslist = [];
  count=0;
  isloading = false;

  constructor(private courseS: CoursesService) { }



  // ngAfterViewInit(): void {

  //   for (let i = 0; i < 10; i++) {
  //     console.log(this.courseslist[i])
  //     const ref = this.container.createComponent(CoursecardComponent);
  //     // ref.setInput("course",this.courseslist[i]);

  //     setTimeout(() => {

  //     }, 1000);
  //   }

  // }

  //   ngAfterContentChecked() {

  //     this.cdref.detectChanges();
  //  }


  ngOnInit(): void {

    setTimeout(() => {
      this.courseS.get().subscribe((data) => {
        this.courseslist = data;
        if (this.isloading){

        
        for (let i = this.count; i < (6+this.count); i++) {
          const ref = this.container.createComponent(CoursecardComponent);
          ref.setInput("course",this.courseslist[i]);
        }
        this.count+=6}
      });
    });


  }
  showMore() {
    for (let i = this.count; i < (6+this.count); i++) {
      const ref = this.container.createComponent(CoursecardComponent);
      ref.setInput("course",this.courseslist[i]);

    }
    this.count+=6;
  }
}
