import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Login } from '../appdto/Login';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  login: Login = new Login();
  message: string;
  
  constructor(private adminService: AdminService, private router: Router) { }


  ngOnInit() {
    
  }
  
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

  


}
