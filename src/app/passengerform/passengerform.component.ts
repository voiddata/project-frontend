import { Component, OnInit } from '@angular/core';
import { FlightSearch } from '../appdto/FlightSearch';
import { Passenger } from '../appmodel/Passenger';

@Component({
  selector: 'app-passengerform',
  templateUrl: './passengerform.component.html',
  styleUrls: ['./passengerform.component.css']
})
export class PassengerformComponent implements OnInit {

  passengerList: Array<Passenger> = new Array<Passenger>();

  flightSearch: FlightSearch = JSON.parse(sessionStorage.getItem('flightSearch'));

  passengerCnt: number = this.flightSearch.noOfPassengers;

  constructor() { 
    
  }

  ngOnInit() {
    this.passengerList.length = this.passengerCnt;

    for (let index = 1; index < this.passengerList.length; index++) {
      const element = this.passengerList;
      
    }

  }

}
