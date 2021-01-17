import { Component, OnInit } from '@angular/core';
import { ScheduleFetch } from '../appdto/ScheduleFetch';
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
  filteredFlights:any;
  flights:any;
  searchQue1: any;
  searchQue2: any;
  public show:boolean =false;

  constructor(public scheduleService: ScheduleService) { }

  //  constructor(private flightCachingService: FlightCachingService,
  //  public scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.fetchSearchData();
    //   this.flightCachingService.setFlights(this.flights);
  }
  filterBySource() {
    console.log("infilter")
    this.filteredFlights = [];
    for (let flight of this.flights) {
      console.log(flight.fromAirport);
      console.log(flight.toAirport);
      if (flight.fromAirport === this.searchQue1 &&
        flight.toAirport === this.searchQue2)
        this.filteredFlights.push(flight);
        
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
  fetchSearchData() {
    let schobj = new ScheduleFetch();
    this.scheduleService.fetchScheduleList(schobj).subscribe(res => {
      // this.flights = res.schedule;
      this.flights = res['schedule'];
      console.log(this.flights);

    });
  }
}
