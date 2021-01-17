import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../appdto/Login';
import { BankAccount } from '../appmodel/BankAccount';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8080/userLogin";
    return this.http.post(url, login); 
  }

  addBankAccount(bankAccount: BankAccount): Observable<any> {
    let url = "http://localhost:8080/addBankAccount";
    return this.http.post(url, bankAccount);
  }
}
