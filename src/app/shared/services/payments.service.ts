import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http:HttpClient) { }
  apiUrl : string = "http://localhost:3001/transactions/";

  get():Observable<any>{
    
    return this.http.get<any>(this.apiUrl);
  }
}
