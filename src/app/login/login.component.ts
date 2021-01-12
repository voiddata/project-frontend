import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../appmodel/login';
import { UserService } from '../user.service';

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
