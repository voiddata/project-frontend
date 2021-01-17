import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightSearch } from '../appdto/FlightSearch';
import { Passenger } from '../appmodel/Passenger';
import { Schedule } from '../appmodel/Schedule';

@Component({
  selector: 'app-passengerform',
  templateUrl: './passengerform.component.html',
  styleUrls: ['./passengerform.component.css']
})
export class PassengerformComponent implements OnInit {

  passengerList: Array<Passenger> = new Array<Passenger>();
  

  flightSearch: FlightSearch = JSON.parse(sessionStorage.getItem('flightSearch'));
  seatList: Array<number> = JSON.parse(sessionStorage.getItem('selectedSeats'));
  schedule: Schedule = JSON.parse(sessionStorage.getItem('schedule'));

  constructor(private router: Router) { 
    
  }

  ngOnInit() {

    for (let index = 0; index < this.seatList.length; index++) {
      this.passengerList.splice(0,0,new Passenger());
    }

    for (let index = 0; index < this.passengerList.length; index++) {
      this.passengerList[index].seatNo = this.seatList[index];
    }

    console.log(this.passengerList);

  }

  bookTicket() {

    for (let index = 0; index < this.passengerList.length; index++) {
      const element = this.passengerList[index];

      if(element.seatNo <= this.schedule.economySeats) {
        element.classType = 'economy';
      } else if(element.seatNo > this.schedule.economySeats) {
        element.classType = 'business';
      }
      
    }


    sessionStorage.setItem('passengerList', JSON.stringify(this.passengerList));
    this.router.navigate(['userDashboard/ticketBooking']);
  }

}
