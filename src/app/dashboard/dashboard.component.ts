import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName: string;

  flightSearchForm: boolean = false;

  constructor() { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('userName');
  }

  searchFlightForm() {
    this.flightSearchForm = true;
  }
}
