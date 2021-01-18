import { Component, OnInit } from '@angular/core';
import { Flight } from '../appmodel/flight-sir';
import { ScheduleFetch } from '../appdto/ScheduleFetch';
import { ScheduleService } from '../services/schedule.service';
import { Schedule } from '../appmodel/Schedule';
import { FlightSearch } from '../appdto/FlightSearch';
import { Router } from '@angular/router';



@Component({
  selector: 'app-flight-filters',
  templateUrl: './flight-filters.component.html',
  styleUrls: ['./flight-filters.component.css']
})
export class FlightFiltersComponent implements OnInit {

  carrier: string;

  flightSearch: FlightSearch = new FlightSearch();
  flights: Schedule[] ;
  filteredFlights: Flight[];
  searchQue:any;


  scheduleList: Schedule[];

  constructor(public scheduleService:ScheduleService, private router: Router) { }

  name: string;

  ngOnInit(
  ): void {

    let schobj = new ScheduleFetch();
    this.scheduleService.fetchScheduleList(schobj).subscribe(res => {
      this.flights = res.schedule;
     this.scheduleList = res['schedule'];
      console.log(this.scheduleList);

    });
  }

  filterByName(carrierName) {
    var index = 0; var arrFlight = [];
     if( this.flights != null &&  this.flights.length > 0 && carrierName != null ) {
      for( index = 0 ; this.flights.length > index ; index++ ) {
        if(this.flights[index] != undefined && this.flights[index].flight != undefined){
          if((this.flights[index].flight.flightName).toLocaleLowerCase() == carrierName.toLocaleLowerCase()) {
            arrFlight.push(this.flights[index]);  
          }
        }      
      }
      this.scheduleList = arrFlight;
     }      
  }
  resetFilters() {
    this.filteredFlights = [];
    this.scheduleList = [];
    this.searchQue =""
  }


  seatSelection(schedule: Schedule, flight: Flight) {
    sessionStorage.setItem('flightSearch', JSON.stringify(this.flightSearch));
    sessionStorage.setItem('flight', JSON.stringify(flight));
    sessionStorage.setItem('schedule', JSON.stringify(schedule));
    this.router.navigate(['userDashboard/seatSelection']);
  }


}
