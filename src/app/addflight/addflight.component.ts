import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FlightFetch } from '../appdto/FlightFetch';
import { Flight } from '../appmodel/Flight';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  flightFetch: FlightFetch = new FlightFetch();

  flight: Flight = new Flight();

  successMsg: boolean = false;
  failureMsg: boolean = false;

  constructor(private flightService: FlightService) { }

  ngOnInit() {

  }

  addFlight() {
    this.flightFetch.flight = this.flight;
    this.flightService.addFlight(this.flightFetch).subscribe(response => {
      console.log(response);
      if(response.status === 'SUCCESS')
        this.successMsg = true;
      else if(response.status === 'FAILED')
        this.failureMsg = true;
    });
  }

}
