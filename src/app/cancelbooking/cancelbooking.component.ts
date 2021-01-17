import { Component, OnInit } from '@angular/core';
import { Booking } from '../appmodel/Booking';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {

  userId: number = JSON.parse(sessionStorage.getItem('id'));

  sMsg: string;

  issuedTickets: Array<Booking> = new Array<Booking>();

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookingService.fetchIssuedTickets(this.userId).subscribe(response => {
      this.issuedTickets = response.bookingHistory;
    });
  }

  cancelTicket(pnr: number) {
    this.bookingService.cancelTicket(pnr).subscribe(response => {
      console.log(response);
      if(response.status === 'SUCCESS') {
        this.sMsg = response.message;
      } else if(response.status === 'FAILED') {
        this.sMsg = response.message;
      }
     });
  }

}
