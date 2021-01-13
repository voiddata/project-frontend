import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../appmodel/login';

import { UserService } from '../user.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login:Login=new Login();
  constructor(private userService: UserService, private router: Router) { }
  message: string;

  ngOnInit() {
  }
  logincheck(){
    //alert(JSON.stringify(this.login));
    this.userService.login(this.login).subscribe(response =>{
      console.log(response);
     if(response.status=='SUCCESS'){
       let userId=response.userId;
       let userName=response.userName;
       sessionStorage.setItem('userId',String(userId));
       sessionStorage.setItem('userName',userName);
       this.router.navigate(['dashboard']);
     }else
      // this.message=response.message;
      document.getElementById("id").innerHTML=this.message=response.message;
     })
    }
}
/*
export class LoginComponent {

  login: Login = new Login();
  message: string;
  
  constructor(private adminService: AdminService, private router: Router) { }

  loginCheck() {
    console.log(this.login);
    this.adminService.login(this.login).subscribe(response => {
      alert(JSON.stringify(response));
      console.log(response);
      if(response.status == 'SUCCESS') {
        let Id = response.Id;
        let userName = response.userName;
        sessionStorage.setItem('Id', String(Id));
        sessionStorage.setItem('userName', userName);
        this.router.navigate(['dashboard']);
      }
      else
        this.message = response.message;
    })
  }

}*/


