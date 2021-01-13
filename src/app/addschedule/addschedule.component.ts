import { Component, OnInit } from '@angular/core';
import { FlightFetch } from '../appdto/FlightFetch';
import { ScheduleFetch } from '../appdto/ScheduleFetch';
import { Flight } from '../appmodel/Flight';
import { Schedule } from '../appmodel/Schedule';
import { FlightService } from '../services/flight.service';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {

  constructor(private flightService: FlightService, private scheduleService: ScheduleService) { }

  flightFetch: FlightFetch = new FlightFetch();
  scheduleFetch: ScheduleFetch = new ScheduleFetch();

  flightList: Array<Flight>;

  schedule: Schedule = new Schedule();
  successMsg: boolean;
  failureMsg: boolean;
  scheduleForm: boolean = false;

  scheduleAdded: boolean = false;
  scheduleFailed: boolean = false;

  flight: Flight = new Flight();

  ngOnInit() {
  }

  fetchListOfFlights() {
    this.scheduleForm = false;
    this.flightService.fetchFlightList(this.flightFetch).subscribe(response => {
      console.log(response.status);
      this.flightList = response.list;
      if(response.status === 'SUCCESS')
        this.successMsg = true;
      else if(response.status === 'FAILURE')
        this.failureMsg = true;
      console.log(response);
    });
  }

  addScheduleToFlight() {
    this.schedule.flight = this.flight;
    this.scheduleFetch.schedule = this.schedule;
    console.log(this.scheduleFetch);
    this.scheduleService.addSchedule(this.scheduleFetch).subscribe(response => {
      if(response.status === 'SUCCESS')
        this.scheduleAdded = true;
      else if(response.status === 'FAILED')
        this.scheduleFailed = true;
    });
  }

  addScheduleForm(flight: Flight) {
    this.flight = flight;
    this.scheduleForm = true;
    this.successMsg = false;
  }
}
