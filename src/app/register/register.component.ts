
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { User } from '../appmodel/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   user:User=new User();
   message:string="Successfully registered";
  constructor(private registerService:RegisterService) { }

  ngOnInit() {
  }
  OnSubmit() {
    alert('Form Submitted succesfully!!!');
  }


  register()
{
 alert(JSON.stringify(this.user));
  this.registerService.register( this.user).subscribe(response=>{
      console.log(response);
     
    });
  
}



}
