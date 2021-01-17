import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../appmodel/Booking';
import { BookingLog } from '../appmodel/BookingLog';
import { Flight } from '../appmodel/Flight';
import { LogserviceService } from '../logservice.service';

@Component({
  selector: 'app-loghistory',
  templateUrl: './loghistory.component.html',
  styleUrls: ['./loghistory.component.css']
})
export class LoghistoryComponent implements OnInit {

  id:number=0;
  userid:string;
  bookings:Array<BookingLog>;
  flights:Array<Flight>;
  successMsg: boolean=false;
  constructor(private logService: LogserviceService, private router: Router) { }

  ngOnInit() {
    this.userid=sessionStorage.getItem('id');
  }

  logcheck(){
    //alert(JSON.stringify(this.payment));
    this.logService.fetchLog(this.id).subscribe(response =>{
      console.log(response);
      this.bookings=response.bookings;
      this.flights=response.flights;
      this.successMsg=true;
    /* if(response.status=='SUCCESS'){
     this.message=response.message;
      // this.router.navigate(['dashboard']);
     }else
      // this.message=response.message;*/
     })
    }

}
