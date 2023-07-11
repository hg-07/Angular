import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewUserprofileComponent } from './view-userprofile/view-userprofile.component';



@NgModule({
  declarations: [
    CreateUserComponent,
    ViewUserprofileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports:[
    CreateUserComponent,
    ViewUserprofileComponent
  ]
})
export class UsersModule { }
