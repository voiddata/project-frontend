
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { User } from '../appmodel/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  
  successMsg: boolean = false;
  failureMsg: boolean = false;

  constructor(private registerService:RegisterService) { }

  ngOnInit() {
  
  }


  register()
  {
    this.registerService.register(this.user).subscribe(response => {
      if(response.status === 'SUCCESS') {
        this.successMsg = true;
      } else if(response.status === 'FAILED') {
        this.failureMsg = true;
      }
    });
  }
}
