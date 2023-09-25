import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent  {


  constructor(private auth:AuthService){}

  test()
  {
    console.log(this.auth.currentUserValue)

  }

  test2()
  {
    
    this.auth.login("99999999999").subscribe();
    
  }
  test3()
  {
    
    this.auth.logout();
    
  }
  

}
