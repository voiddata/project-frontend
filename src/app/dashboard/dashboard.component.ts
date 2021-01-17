import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName: string;


  constructor(private router: Router) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('userName');
  }

  // searchFlightForm() {
  //   this.flightSearchForm = true;
  // }

  // bookingHistory() {
  //   this.router.navigate(['bookingHistory']);
  // }

  // cancelBooking() {
  //   this.router.navigate(['cancelBooking']);
  // }
}
