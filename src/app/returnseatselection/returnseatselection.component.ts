import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightSearch } from '../appdto/FlightSearch';
import { SeatFetch } from '../appdto/SeatFetch';
import { Flight } from '../appmodel/Flight';
import { Schedule } from '../appmodel/Schedule';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-returnseatselection',
  templateUrl: './returnseatselection.component.html',
  styleUrls: ['./returnseatselection.component.css']
})
export class ReturnseatselectionComponent implements OnInit {


  cbox: boolean = false;

  schedule1: Schedule = JSON.parse(sessionStorage.getItem('schedule01'));
  schedule2: Schedule = JSON.parse(sessionStorage.getItem('schedule11'));
  flight1: Flight = JSON.parse(sessionStorage.getItem('flight01'));
  flight2: Flight = JSON.parse(sessionStorage.getItem('flight11'));
  flightSearch: FlightSearch = JSON.parse(sessionStorage.getItem('flightSearch'));

  eSeatChunks1: number[][] = new Array<Array<number>>();
  bSeatChunks1: number[][] = new Array<Array<number>>();
  eSeatChunks2: number[][] = new Array<Array<number>>();
  bSeatChunks2: number[][] = new Array<Array<number>>();
  eSeatDivision1: number;
  bSeatDivision1: number;
  eSeatDivision2: number;
  bSeatDivision2: number;

  economySeats1: number = this.schedule1.economySeats;
  businessSeats1: number = this.schedule1.bussinessSeats;
  economySeats2: number = this.schedule2.economySeats;
  businessSeats2: number = this.schedule2.bussinessSeats;

  economyArray1: Array<number> = new Array<number>();
  businessArray1: Array<number> = new Array<number>();
  economyArray2: Array<number> = new Array<number>();
  businessArray2: Array<number> = new Array<number>();

  bookedSeats1: Array<number> = new Array<number>();
  bookedSeats2: Array<number> = new Array<number>();

  seatFetch1: SeatFetch = new SeatFetch();
  seatFetch2: SeatFetch = new SeatFetch();

  i1: number = 1;
  j1: number = 0;
  i2: number = 1;
  j2: number = 0;
  passengerCnt: number;
  maxCnt: boolean = false;

  selectedSeats1: Array<number> = new Array<number>();
  selectedSeats2: Array<number> = new Array<number>();

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit() {


    while (this.i1 <= this.economySeats1) {
      this.economyArray1.push(this.i1);
      this.i1++;
    }

    this.businessSeats1 = this.businessSeats1 + this.i1;

    while(this.i1 < this.businessSeats1) {
      this.businessArray1.push(this.i1);
      this.i1++;
    }

    
    this.eSeatDivision1 = this.economySeats1 / 10;
    this.bSeatDivision1 = this.businessSeats1 / 10;
    
    var i,j,chunk = 8,index;
    for (i=0,j=this.economyArray1.length,index=0; i<j && index < this.eSeatDivision1; i+=chunk,index++) {
      this.eSeatChunks1[index] = this.economyArray1.slice(i,i+chunk);
    }
    
    for (i=0,j=this.businessArray1.length,index=0; i<j && index < this.bSeatDivision1; i+=chunk,index++) {
      this.bSeatChunks1[index] = this.businessArray1.slice(i,i+chunk);
    }

    this.seatFetch1.flight = this.flight1;
    this.seatFetch1.schedule = this.schedule1;
    this.bookingService.fetchBookedSeats(this.seatFetch1).subscribe(response => {
      this.bookedSeats1 = response.bookedSeats;
    });
    this.passengerCnt = this.flightSearch.noOfPassengers;


    
    while (this.i2 <= this.economySeats2) {
      this.economyArray2.push(this.i2);
      this.i2++;
    }

    this.businessSeats2 = this.businessSeats2 + this.i2;

    while(this.i2 < this.businessSeats2) {
      this.businessArray2.push(this.i2);
      this.i2++;
    }

    
    this.eSeatDivision2 = this.economySeats2 / 10;
    this.bSeatDivision2 = this.businessSeats2 / 10;
    
    var k,l,chunk1 = 8,index1;
    for (k=0,l=this.economyArray2.length,index1=0; k<l && index1 < this.eSeatDivision2; k+=chunk1,index1++) {
      this.eSeatChunks2[index1] = this.economyArray2.slice(k,k+chunk1);
    }
    
    for (k=0,l=this.businessArray2.length,index1=0; k<l && index1 < this.bSeatDivision2; k+=chunk1,index1++) {
      this.bSeatChunks2[index1] = this.businessArray2.slice(k,k+chunk1);
    }

    this.seatFetch2.flight = this.flight2;
    this.seatFetch2.schedule = this.schedule2;
    this.bookingService.fetchBookedSeats(this.seatFetch2).subscribe(response => {
      this.bookedSeats2 = response.bookedSeats;
    });
    this.passengerCnt = this.flightSearch.noOfPassengers;


  }

  checkBoxChange(event: any) {
    //console.log(event.target.checked);
    //console.log(event);
    //console.log(event.target.id);
    
    if(event.target.checked === true) {
      this.j1++;
      if(this.j1 <= this.passengerCnt) { 
        this.selectedSeats1.push(event.target.id);
      }

      if(this.j1 > this.passengerCnt) {
        alert("Already selected required seats! Unselect to select another seat");
        event.target.checked = false;
        this.j1--;
      }
    } else if(event.target.checked === false && this.j1 > 0) {
      const ind = this.selectedSeats1.indexOf(event.target.id);
      if (ind > -1) {
        this.selectedSeats1.splice(ind, 1);
      }
      this.j1--;
    } 
  }

  checkBoxChange1(event: any) {
    //console.log(event.target.checked);
    //console.log(event);
    //console.log(event.target.id);
    
    if(event.target.checked === true) {
      this.j2++;
      if(this.j2 <= this.passengerCnt) { 
        this.selectedSeats2.push(event.target.id);
      }

      if(this.j2 > this.passengerCnt) {
        alert("Already selected required seats! Unselect to select another seat");
        event.target.checked = false;
        this.j2--;
      }
    } else if(event.target.checked === false && this.j2 > 0) {
      const ind = this.selectedSeats2.indexOf(event.target.id);
      if (ind > -1) {
        this.selectedSeats2.splice(ind, 1);
      }
      this.j2--;
    } 
  }

  nextComp() {
    sessionStorage.setItem('selectedSeats1', JSON.stringify(this.selectedSeats1));
    sessionStorage.setItem('selectedSeats2', JSON.stringify(this.selectedSeats2));
    this.router.navigate(['userDashboard/returnPassengerForm']);
    console.log(this.selectedSeats1);
    console.log(this.selectedSeats2);
  }
  

}
