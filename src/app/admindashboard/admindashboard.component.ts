import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  user: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = sessionStorage.getItem('userName');
  }
  
  // addFlightFn() {
  //   this.router.navigate(['addFlight']);
  // }

  // fetchScheduleFn() {
  //   this.router.navigate(['fetchSchedule']);
  // }

  // addScheduleFn() {
  //   this.router.navigate(['addSchedule']);
  // }
}
