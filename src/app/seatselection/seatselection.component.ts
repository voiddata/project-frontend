import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightSearch } from '../appdto/FlightSearch';
import { SeatFetch } from '../appdto/SeatFetch';
import { Flight } from '../appmodel/Flight';
import { Schedule } from '../appmodel/Schedule';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-seatselection',
  templateUrl: './seatselection.component.html',
  styleUrls: ['./seatselection.component.css']
})
export class SeatselectionComponent implements OnInit {


  cbox: boolean = false;

  schedule: Schedule = JSON.parse(sessionStorage.getItem('schedule'));
  flight: Flight = JSON.parse(sessionStorage.getItem('flight'));
  flightSearch: FlightSearch = JSON.parse(sessionStorage.getItem('flightSearch'));

  economySeats: number = this.schedule.economySeats;
  businessSeats: number = this.schedule.bussinessSeats;

  economyArray: Array<number> = new Array<number>();
  businessArray: Array<number> = new Array<number>();

  bookedSeats: Array<number> = new Array<number>();

  seatFetch: SeatFetch = new SeatFetch();

  i: number = 1;
  j: number = 0;
  passengerCnt: number;
  maxCnt: boolean = false;

  selectedSeats: Array<number> = new Array<number>();

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit() {

    while (this.i <= this.economySeats) {
      this.economyArray.push(this.i);
      this.i++;
    }

    this.businessSeats = this.businessSeats + this.i;

    while(this.i < this.businessSeats) {
      this.businessArray.push(this.i);
      this.i++;
    }

    this.seatFetch.flight = this.flight;
    this.seatFetch.schedule = this.schedule;
    this.bookingService.fetchBookedSeats(this.seatFetch).subscribe(response => {
      this.bookedSeats = response.bookedSeats;
    });
    this.passengerCnt = this.flightSearch.noOfPassengers;
  }

  checkBoxChange(event: any) {
    //console.log(event.target.checked);
    //console.log(event);
    //console.log(event.target.id);
    
    if(event.target.checked === true && this.j != this.passengerCnt) { 
      this.selectedSeats.push(event.target.id);
      this.j++;
    } else if(event.target.checked === false && this.j > 0) {

      const ind = this.selectedSeats.indexOf(event.target.id);
      if (ind > -1) {
        this.selectedSeats.splice(ind, 1);
      }

      this.j--;
    } 
    if(this.j == this.passengerCnt) {
      this.maxCnt = true;
      sessionStorage.setItem('selectedSeats', JSON.stringify(this.selectedSeats));
      this.router.navigate(['passengerForm']);
    }
    

  }
  


}
