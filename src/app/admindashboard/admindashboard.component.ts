import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {


  addFlight: boolean = false;
  addSchedule: boolean = false;
  fetchSchedule: boolean = false;

  user: string;

  constructor() { }

  ngOnInit() {
    this.user = sessionStorage.getItem('userName');
  }
  
  addFlightFn() {
    this.addFlight = true;
    this.addSchedule = false;
    this.fetchSchedule = false;
  }

  fetchScheduleFn() {
    this.addFlight = false;
    this.addSchedule = false;
    this.fetchSchedule = true;
  }

  addScheduleFn() {
    this.addFlight = false;
    this.addSchedule = true;
    this.fetchSchedule = false;
  }
}
