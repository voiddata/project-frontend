import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from '../appmodel/Passenger';
import { Schedule } from '../appmodel/Schedule';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-returnticketbooking',
  templateUrl: './returnticketbooking.component.html',
  styleUrls: ['./returnticketbooking.component.css']
})
export class ReturnticketbookingComponent implements OnInit {

  seatList1: Array<number> = JSON.parse(sessionStorage.getItem('selectedSeats1'));
  seatList2: Array<number> = JSON.parse(sessionStorage.getItem('selectedSeats2'));

  passengerList1: Array<Passenger> = JSON.parse(sessionStorage.getItem('passengerList1'));
  passengerList2: Array<Passenger> = JSON.parse(sessionStorage.getItem('passengerList2'));
  schedule1: Schedule = JSON.parse(sessionStorage.getItem('schedule01'));
  schedule2: Schedule = JSON.parse(sessionStorage.getItem('schedule11'));
  userId: number = JSON.parse(sessionStorage.getItem('id'));
  userName: string = sessionStorage.getItem('userName');

  sMsg: boolean = false;
  fMsg: boolean = false;

  price: number = 0;

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit() {
    for (let index = 0; index < this.seatList1.length; index++) {
      const element = this.seatList1[index];

      if(element <= this.schedule1.economySeats) {
        this.price = this.schedule1.eSeatPrice * this.passengerList1.length;
      } else if(element > this.schedule1.economySeats) {
        this.price = this.schedule1.bSeatPrice * this.passengerList1.length;
      }
      
    }

    for (let index = 0; index < this.seatList2.length; index++) {
      const element = this.seatList2[index];

      if(element <= this.schedule2.economySeats) {
        this.price = this.schedule2.eSeatPrice * this.passengerList2.length;
      } else if(element > this.schedule1.economySeats) {
        this.price = this.schedule2.bSeatPrice * this.passengerList2.length;
      }
      
    }
  }

  bookTicketFn() {
    sessionStorage.setItem('price',JSON.stringify(this.price));
    this.router.navigate(['userDashboard/returnBankSelect']);

  }
}
