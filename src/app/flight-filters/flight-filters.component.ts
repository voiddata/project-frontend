import { Component, OnInit } from '@angular/core';
import { Flight } from '../appmodel/flight-sir';
import { ScheduleFetch } from '../appdto/ScheduleFetch';
import { ScheduleService } from '../services/schedule.service';



@Component({
  selector: 'app-flight-filters',
  templateUrl: './flight-filters.component.html',
  styleUrls: ['./flight-filters.component.css']
})
export class FlightFiltersComponent implements OnInit {

  //carrier: string;


  flights: Flight[] ;
  filteredFlights: Flight[];
  searchQue:any

  constructor(public scheduleService:ScheduleService) { }

  ngOnInit(
  ): void {
    this.fetchData();
  }

  filterByName() {
    console.log("infilter")
    this.filteredFlights = [];
    for(let flight of this.flights){
      console.log(flight['flight'].flightName);
      if(flight['flight'].flightName == this.searchQue)
        this.filteredFlights.push(flight);
    }
      
  }

  resetFilters() {
    this.filteredFlights = []
    this.searchQue =""
  }

  fetchData(){
    let schobj = new ScheduleFetch();
    this.scheduleService.fetchScheduleList(schobj).subscribe(res => {
      // this.flights = res.schedule;
     this.flights = res['schedule'];
      console.log(this.flights);

    });
  }
}
