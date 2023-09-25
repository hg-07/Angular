import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { loginuser } from 'src/app/core/models/loginuser.model';
import { user } from 'src/app/core/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  apiUrl: string = "http://localhost:3001/login/";

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<user|user>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<user|null>(JSON.parse(localStorage.getItem('currentUser')!));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): user {
      return this.currentUserSubject.value;
  }

  

  login(payload:any) {
      return this.http.post<loginuser>(this.apiUrl, payload)
          .pipe(map(res => {
              
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('token', JSON.stringify(res.token));
              localStorage.setItem('currentUser', JSON.stringify(res.user));
              this.currentUserSubject.next(res.user);
              return res;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      this.currentUserSubject.next(null);
  }


}
