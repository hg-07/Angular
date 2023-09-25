import { Component, OnInit } from '@angular/core';

import {UserService} from 'src/app/shared/services/user.service'
import {user} from 'src/app/core/models/user.model'

@Component({
  selector: 'app-view-userprofile',
  templateUrl: './view-userprofile.component.html',
  styleUrls: ['./view-userprofile.component.scss']
})
export class ViewUserprofileComponent implements OnInit{
  
  changeProfile : boolean;
  user = {} as user;
  constructor(private userService:UserService){
    this.changeProfile = false;
  }

  ngOnInit(): void {
     this.getAPI();
  }
  changeProfileRedirect(){
    
    this.changeProfile = true;
    
  }
  getAPI(){
    this.userService.get().subscribe((data)=>{
      this.user =data;
    })
  }
}
