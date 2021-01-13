import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../appmodel/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
   
  register(user:User):Observable<any>{
    let url="http://localhost:8080/userRegister";
    return this.http.post(url,user);
  }



}
