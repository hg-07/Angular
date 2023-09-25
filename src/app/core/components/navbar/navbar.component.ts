import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  showclass: string;
  loggedin = false;
  constructor(private auth:AuthService) {
    this.showclass = "";
    
  }

  ngOnInit(): void {
    this.auth.currentUser.subscribe((data)=>{this.loggedin=(data?true:false)});
  }

  datat(data: any) {
    this.showclass = data[0];
    this.auth.currentUser.subscribe((data)=>{this.loggedin=(data?true:false)});
    
    console.log(this.loggedin)

  }

  logout(){
    this.auth.logout();
  }





}
