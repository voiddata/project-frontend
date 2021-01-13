import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../appdto/Login';

import { UserService } from '../services/user.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login:Login = new Login();

  constructor(private userService: UserService, private router: Router) { }
  failureMsg: boolean = false;

  ngOnInit() {
  }

  loginCheck() {
    this.userService.login(this.login).subscribe(response => {
      if(response.status === 'SUCCESS') {
        let id = response.id;
        let userName = response.userName;
        sessionStorage.setItem('id',String(id));
        sessionStorage.setItem('userName',userName);
        this.router.navigate(['userDashboard']);
      } else if(response.status === 'FAILED') {
        this.failureMsg = true;
      }
     })
    }
}

