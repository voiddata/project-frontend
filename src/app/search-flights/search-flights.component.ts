import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightSearch } from '../appdto/FlightSearch';
import { ScheduleFetch } from '../appdto/ScheduleFetch';
import { Flight } from '../appmodel/Flight';
import { Schedule } from '../appmodel/Schedule';
import { ScheduleService } from '../services/schedule.service';


@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {


  //this won't be here since the data will come from the backend
  // flights: Flight[] = [
  //   new Flight(111, "Air India", "Mumbai", "Delhi"),
  //  new Flight(123, "Indigo", "Delhi", "Mumbai"),
  //  new Flight(145, "Vistara", "Chandigarh", "Delhi"),
  //  new Flight(156, "Indigo", "Chennai", "Delhi"),
  //  new Flight(167, "Air India", "Mumbai", "Bangalore")
  // ]

  //flights: searchFlight[];
  //filteredFlights: searchFlight[];
  
  flights:any;
  searchQue1: any;
  searchQue2: any;
  public show:boolean =false;
  scheduleList: any;
  flightSearch: FlightSearch = new FlightSearch();

  constructor(public scheduleService: ScheduleService, private router: Router) { }

  //  constructor(private flightCachingService: FlightCachingService,
  //  public scheduleService: ScheduleService) { }

  ngOnInit(): void {
    //this.fetchSearchData();
    //   this.flightCachingService.setFlights(this.flights);

    let schobj = new ScheduleFetch();
    this.scheduleService.fetchScheduleList(schobj).subscribe(res => {
      // this.flights = res.schedule;
      this.flights = res['schedule'];
      this.scheduleList = res['schedule'];
      console.log(this.flights);

    });
  }
  filterBySource() {
    console.log("infilter")
    this.scheduleList = [];
    for (let flight of this.flights) {
      console.log(flight.fromAirport);
      console.log(flight.toAirport);
      if (flight.fromAirport === this.searchQue1 &&
        flight.toAirport === this.searchQue2) {
        //this.flights.push(flight);
        this.scheduleList.push(flight); 
      }
    }

  }

 fetchData(){
     let schobj = new ScheduleFetch();
     this.scheduleService.fetchScheduleList(schobj).subscribe(res => console.log(res));
    }

  // reload() {
  //   this.flights = this.flightCachingService.getFlights();
  // }
  //}

  seatSelection(schedule: Schedule, flight: Flight) {
    sessionStorage.setItem('flightSearch', JSON.stringify(this.flightSearch));
    sessionStorage.setItem('flight', JSON.stringify(flight));
    sessionStorage.setItem('schedule', JSON.stringify(schedule));
    this.router.navigate(['userDashboard/seatSelection']);
  }

}
