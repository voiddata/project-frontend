import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingLog } from '../appmodel/BookingLog';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking:BookingLog=new BookingLog();
  constructor(private bookingService:BookingService,private router: Router) { }

  ngOnInit() {
  }

  bookingcheck(){
    //alert(JSON.stringify(this.customer));
    this.bookingService.book(this.booking).subscribe(response =>{
      alert(JSON.stringify(response));
    })
  }
}
