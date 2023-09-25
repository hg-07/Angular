import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {user} from 'src/app/core/models/user.model'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor(private http:HttpClient) { }

  apiUrl : string = "http://localhost:3001/users/";

  get():Observable<user>{
    
    return this.http.get<user>(this.apiUrl);
  }
  updateUser(payload:user){
    return this.http.put(`http://localhost:3001/users/${payload.id}`,payload)
    
  }
  createUser(payload:any){
    
    return this.http.post(this.apiUrl,payload);
    
  }
  // get():Observable<Photos[]>{
    
  //   return this.http.get<Photos[]>("http://localhost:3000/GirlImages");
  // }
  // add(payload:Photos){
  //   return this.http.post("http://localhost:3000/GirlImages",payload);
  // }
  // getById(id:number):Observable<Photos>{
  //   return this.http.get<Photos>(`http://localhost:3000/GirlImages/${id}`); 
  //   }
  // update(payload:Photos){
  //   return this.http.put(`http://localhost:3000/GirlImages/${payload.id}`,payload
  //   )
  // }
  // delete(id:number){
  //   return this.http.delete(`http://localhost:3000/GirlImages/${id}`)
  // }
}
