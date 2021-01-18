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

  departureAirport: string = '';
  arrivalAirport: string = '';
  returnDepartureAirport: string = '';
  returnArrivalAirport: string = '';
  count: number = 0;

  constructor(private scheduleService: ScheduleService, private router: Router) { }

  ngOnInit() {
  }

  fetchFlights() {
    
    this.scheduleService.fetchScheduleForUser(this.flightSearch).subscribe(response => {
      this.scheduleList = response.schedule;
      console.log(this.scheduleList);

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
    this.router.navigate(['userDashboard/seatSelection']);
  }

  seatSelectionReturn(schedule: Schedule, flight: Flight, event: any) {
    

    if(event.target.checked == true) {
      sessionStorage.setItem('flightSearch', JSON.stringify(this.flightSearch));
      sessionStorage.setItem('flight' + this.count + 1, JSON.stringify(flight));
      sessionStorage.setItem('schedule' + this.count + 1, JSON.stringify(schedule));

      if(this.count == 0) {
        this.departureAirport = schedule.fromAirport;
        this.arrivalAirport = schedule.toAirport;
        console.log(this.departureAirport);
        console.log(this.arrivalAirport);
        this.count++;
      } else if(this.count == 1) {
        if(schedule.fromAirport == this.arrivalAirport && schedule.toAirport == this.departureAirport) {
          this.count++;
        } else {
          alert('Invalid Return Schedule! Please select matching schedules');
          event.target.checked = false;
        }
      } else if(this.count > 1) {
        alert('Schedules selected already!');
        event.target.checked = false;
      }
    } else if (event.target.checked == false) {
      this.count--;
    }
  }

  goToSeatSelection() {
    this.router.navigate(['userDashboard/returnSeatSelection']);
  }

}
