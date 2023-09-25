import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit{


  @Output() public events = new EventEmitter<any>();
  otpReceived:boolean;
  
  showclass = "";


  constructor(private fb:FormBuilder,
    private userService:UserService,
    private auth:AuthService){
    this.otpReceived = false;
    
  }


  phoneNumberForm = this.fb.group({
    phoneNumber: ['']
  })
  otpForm = this.fb.group({
    OTP: ['']
  })

  ngOnInit(): void {

  }

  getOTP(){
    this.otpReceived=true;
    this.showclass="show"
    this.events.emit([this.showclass])
    

  }

  submitOTP(){
    // this.userService.createUser(this.phoneNumberForm.value).subscribe((data)=>{console.log(data)
    // });
    this.auth.login(this.phoneNumberForm.value).subscribe(data => console.log(data));
    console.log(this.otpForm.value);
    
    this.showclass=""
    this.events.emit([this.showclass])
  }


}
