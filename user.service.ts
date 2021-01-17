import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './appmodel/login';
import { Payment } from './appmodel/payment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8585/login";
   return this.http.post(url, login); 
  }

  payment(payment: Payment) : Observable<any> {
    let url = "http://localhost:8585/payment";
   return this.http.post(url, payment); 
  }
}
