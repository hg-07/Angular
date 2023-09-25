import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserprofileComponent } from './features/users/view-userprofile/view-userprofile.component';
import { LoginUserComponent } from './features/users/login-user/login-user.component';
import { CreateUserComponent } from './features/users/create-user/create-user.component';
import { AllcoursesComponent } from './features/cards/allcourses/allcourses.component';
import { PaymentsComponent } from './features/userspecific/payments/payments.component';
import { MycoursecardComponent } from './features/cards/mycoursecard/mycoursecard.component';
import { MycoursesComponent } from './features/userspecific/mycourses/mycourses.component';
import { HomeComponent } from './features/home/home.component';
import { TestComponent } from './features/test/test.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:"profile",component:ViewUserprofileComponent
  },
  {
    path:"register",component:CreateUserComponent
  },
  {
    path:"courses",component:AllcoursesComponent
  },
  {
    path:"payments",component:PaymentsComponent
  },
  {
    path:"mycourses",component:MycoursesComponent
  },
  {
    path:"",redirectTo:"/home",pathMatch:"full"
  },
  {
    path:"test",component:TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
