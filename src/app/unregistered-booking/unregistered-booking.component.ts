import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnregisteredUser } from '../appdto/UnregisteredUser';
import { UnregisterService } from '../services/unregister.service';

@Component({
  selector: 'app-unregistered-booking',
  templateUrl: './unregistered-booking.component.html',
  styleUrls: ['./unregistered-booking.component.css']
})
export class UnregisteredBookingComponent implements OnInit {

  successMsg = false;
  failureMsg = false;

  constructor(private unregisterService: UnregisterService, private router: Router) { }

  unuser:UnregisteredUser = new UnregisteredUser();
  ngOnInit() {

  }

  unregister()
  {
    this.unregisterService.unregister(this.unuser).subscribe(response => {
      if(response.status === 'SUCCESS') {
        let id = response.registeredUserId;
        let userName = response.userName;
        sessionStorage.setItem('id',String(id));
        sessionStorage.setItem('userName',userName);
      } else if(response.status === 'FAILED') {
        this.failureMsg = true;
      }
    });
    this.router.navigate(['userDashboard/ticketBooking']);
  }

}
