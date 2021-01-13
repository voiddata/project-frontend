import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './register/appmodel/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
   
  register(user:User):Observable<any>{
    let url="http://localhost:8080/register";
    return this.http.post(url,user);
  }



}
