import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  constructor(private fb: FormBuilder){}


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
    course:[''],
    address: this.fb.group({
      userAddress: [''],
      pin: ['']
    }),
  });

  onSubmit(){
    
    console.log('Your form data : ',this.userForm.value);
  }

}
