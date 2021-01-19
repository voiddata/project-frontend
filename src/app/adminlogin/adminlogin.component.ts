import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Login } from '../appdto/Login';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  login: Login = new Login();
  failureMsg: boolean;
  
  constructor(private adminService: AdminService, private router: Router) { }


  ngOnInit() {
    this.failureMsg = false;
  }
  
  loginCheck() {
    this.adminService.login(this.login).subscribe(response => {
      if(response.status === 'SUCCESS') {
        let id = response.id;
        let userName = response.userName;
        sessionStorage.setItem('id', String(id));
        sessionStorage.setItem('userName', userName);
        this.router.navigate(['adminDashboard']);
      }
      else if(response.status === 'FAILED')
      {
        this.failureMsg = true;
      }
    })
  }

  
  


}
