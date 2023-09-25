import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-authinterceptor',
  templateUrl: './authinterceptor.component.html',
  styleUrls: ['./authinterceptor.component.scss']
})
export class AuthinterceptorComponent implements HttpInterceptor {
  constructor(public authS:AuthService){}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.authS.currentUserValue)
  {
    req = req.clone({ headers: req.headers.set( 'Authorization', 'Bearer '+this.authS.currentUser)});
  }
  else
  {
  //  this.router.navigate(['LoginPage']);
  }
return next.handle(req);
  }

  

}
