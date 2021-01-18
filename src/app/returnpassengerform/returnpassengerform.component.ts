import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightSearch } from '../appdto/FlightSearch';
import { Passenger } from '../appmodel/Passenger';
import { Schedule } from '../appmodel/Schedule';

@Component({
  selector: 'app-returnpassengerform',
  templateUrl: './returnpassengerform.component.html',
  styleUrls: ['./returnpassengerform.component.css']
})
export class ReturnpassengerformComponent implements OnInit {

  passengerList1: Array<Passenger> = new Array<Passenger>();
  passengerList2: Array<Passenger> = new Array<Passenger>();
  
  

  flightSearch: FlightSearch = JSON.parse(sessionStorage.getItem('flightSearch'));
  seatList1: Array<number> = JSON.parse(sessionStorage.getItem('selectedSeats1'));
  seatList2: Array<number> = JSON.parse(sessionStorage.getItem('selectedSeats2'));
  schedule1: Schedule = JSON.parse(sessionStorage.getItem('schedule01'));
  schedule2: Schedule = JSON.parse(sessionStorage.getItem('schedule11'));
  
  constructor(private router: Router) { 
    
  }

  ngOnInit() {

    for (let index = 0; index < this.seatList1.length; index++) {
      this.passengerList1.splice(0,0,new Passenger());
    }

    for (let index = 0; index < this.passengerList1.length; index++) {
      this.passengerList1[index].seatNo = this.seatList1[index];
    }

    for (let index = 0; index < this.seatList2.length; index++) {
      this.passengerList2.splice(0,0,new Passenger());
    }

    for (let index = 0; index < this.passengerList2.length; index++) {
      this.passengerList2[index].seatNo = this.seatList2[index];
    }

    console.log(this.passengerList1);
    console.log(this.passengerList2);

  }

  bookTicket() {

    for (let index = 0; index < this.passengerList1.length; index++) {
      const element = this.passengerList1[index];

      if(element.seatNo <= this.schedule1.economySeats) {
        element.classType = 'economy';
      } else if(element.seatNo > this.schedule1.economySeats) {
        element.classType = 'business';
      }
      
    }

    for (let index = 0; index < this.passengerList2.length; index++) {
      const element = this.passengerList2[index];

      if(element.seatNo <= this.schedule2.economySeats) {
        element.classType = 'economy';
      } else if(element.seatNo > this.schedule2.economySeats) {
        element.classType = 'business';
      }
      
    }

    for (let index = 0; index < this.passengerList2.length; index++) {
      this.passengerList2[index].age = this.passengerList1[index].age;
      this.passengerList2[index].firstName = this.passengerList1[index].firstName;
      this.passengerList2[index].lastName = this.passengerList1[index].lastName;
      this.passengerList2[index].typeOfPassenger = this.passengerList1[index].typeOfPassenger;
    }


    sessionStorage.setItem('passengerList1', JSON.stringify(this.passengerList1));
    sessionStorage.setItem('passengerList2', JSON.stringify(this.passengerList2));
    this.router.navigate(['userDashboard/returnTicketBooking']);
  }

}
