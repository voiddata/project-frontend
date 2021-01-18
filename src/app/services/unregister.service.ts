import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnregisteredUser } from '../appdto/UnregisteredUser';

@Injectable({
  providedIn: 'root'
})
export class UnregisterService {

  constructor(private http: HttpClient) { }

  unregister(unregister: UnregisteredUser) : Observable<any> {
    let url = "http://localhost:8080/unregisterUser";
    return this.http.post(url, unregister); 
  }
}
