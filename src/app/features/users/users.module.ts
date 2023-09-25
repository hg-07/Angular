import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewUserprofileComponent } from './view-userprofile/view-userprofile.component';
import { LoginUserComponent } from './login-user/login-user.component';



@NgModule({
  declarations: [
    CreateUserComponent,
    ViewUserprofileComponent,
    LoginUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports:[
    CreateUserComponent,
    ViewUserprofileComponent,
    LoginUserComponent
  ]
})
export class UsersModule { }
