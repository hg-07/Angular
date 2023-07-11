import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserprofileComponent } from './features/users/view-userprofile/view-userprofile.component';

const routes: Routes = [
  {
    path:"profile",component:ViewUserprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
