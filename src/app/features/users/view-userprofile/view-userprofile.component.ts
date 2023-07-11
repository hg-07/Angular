import { Component, OnInit } from '@angular/core';
import {CreateUserComponent} from '../create-user/create-user.component'

@Component({
  selector: 'app-view-userprofile',
  templateUrl: './view-userprofile.component.html',
  styleUrls: ['./view-userprofile.component.scss']
})
export class ViewUserprofileComponent implements OnInit{
  
  changeProfile : boolean;
  constructor(){
    this.changeProfile = false;
  }

  ngOnInit(): void {
    
  }
  changeProfileRedirect(){
    console.log("hello");
    this.changeProfile = true;
    
  }
}
