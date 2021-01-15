import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightSearch } from '../appdto/FlightSearch';
import { Flight } from '../appmodel/Flight';
import { Schedule } from '../appmodel/Schedule';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-userflightsearch',
  templateUrl: './userflightsearch.component.html',
  styleUrls: ['./userflightsearch.component.css']
})
export class UserflightsearchComponent implements OnInit {


  flightSearch: FlightSearch = new FlightSearch();
  scheduleList: Array<Schedule> = new Array<Schedule>();

  success: boolean;
  failure: boolean;
  hideForm: boolean = true;

  constructor(private scheduleService: ScheduleService, private router: Router) { }

  ngOnInit() {
  }

  fetchFlights() {
    
    this.scheduleService.fetchScheduleForUser(this.flightSearch).subscribe(response => {
      this.scheduleList = response.schedule;

      if(response.status === 'FAILED') {
        this.failure = true;
      } else if(response.status === 'SUCCESS') {
        this.success = true;
        this.hideForm = false;
      }
    });

    
  }

  seatSelection(schedule: Schedule, flight: Flight) {
    sessionStorage.setItem('flightSearch', JSON.stringify(this.flightSearch));
    sessionStorage.setItem('flight', JSON.stringify(flight));
    sessionStorage.setItem('schedule', JSON.stringify(schedule));
    this.router.navigate(['seatSelection']);
  }
}
