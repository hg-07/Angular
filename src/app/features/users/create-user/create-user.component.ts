import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  constructor(private fb: FormBuilder,
    private userService:UserService){}


  userForm = this.fb.group({
    firstName: ['',{
      validators: [
         Validators.required
      ]
  }],
    lastName: [''],
    email:['',{
      validators: [
         Validators.required, 
         Validators.email
      ]
  }],
    mobile:['',{
      validators: [
         Validators.required, 
         Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)
      ]
  }],
    dateofBirth:['',{
      validators: [
         Validators.required
      ]
  }],
    gender:['',{
      validators: [
         Validators.required
      ]
  }],
  description:[''],
    address: this.fb.group({
      userAddress: [''],
      pin: ['']
    }),
  });

  onSubmit(){
    this.userService.createUser(this.userForm.value).subscribe((data)=>{console.log(data)
    });
    console.log('Your form data : ',this.userForm.value);

  }

}
