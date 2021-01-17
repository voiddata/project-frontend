import { Component, OnInit } from '@angular/core';
import { Booking } from '../appmodel/Booking';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {


  userId: number = JSON.parse(sessionStorage.getItem('id'));

  bookingHistory: Array<Booking> = new Array<Booking>();

  constructor(private bookingService: BookingService) { }

  ngOnInit() {

    this.bookingService.fetchBookingHistory(this.userId).subscribe (response => {
      this.bookingHistory = response.bookingHistory;
    });

  }

}
