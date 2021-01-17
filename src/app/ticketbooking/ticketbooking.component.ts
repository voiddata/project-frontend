import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookTicket } from '../appdto/BookTicket';
import { FlightSearch } from '../appdto/FlightSearch';
import { Payment } from '../appdto/Payment';
import { Passenger } from '../appmodel/Passenger';
import { Schedule } from '../appmodel/Schedule';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent implements OnInit {
  seatList: Array<number> = JSON.parse(sessionStorage.getItem('selectedSeats'));

  passengerList: Array<Passenger> = JSON.parse(sessionStorage.getItem('passengerList'));
  schedule: Schedule = JSON.parse(sessionStorage.getItem('schedule'));
  userId: number = JSON.parse(sessionStorage.getItem('id'));

  sMsg: boolean = false;
  fMsg: boolean = false;

  price: number = 0;

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit() {
    for (let index = 0; index < this.seatList.length; index++) {
      const element = this.seatList[index];

      if(element <= this.schedule.economySeats) {
        this.price = this.schedule.eSeatPrice * this.passengerList.length;
      } else if(element > this.schedule.economySeats) {
        this.price = this.schedule.bSeatPrice * this.passengerList.length;
      }
      
    }
  }

  bookTicketFn() {
    sessionStorage.setItem('price',JSON.stringify(this.price));
    this.router.navigate(['selectBank']);

  }



}
