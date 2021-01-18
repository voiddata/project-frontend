import { Component, OnInit } from '@angular/core';
import { BookTicket } from '../appdto/BookTicket';
import { Payment } from '../appdto/Payment';
import { ReturnTicket } from '../appdto/ReturnTicket';
import { BankAccount } from '../appmodel/BankAccount';
import { Passenger } from '../appmodel/Passenger';
import { Schedule } from '../appmodel/Schedule';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-returnbankselect',
  templateUrl: './returnbankselect.component.html',
  styleUrls: ['./returnbankselect.component.css']
})
export class ReturnbankselectComponent implements OnInit {

  
  userId: number = JSON.parse(sessionStorage.getItem('id'));
  returnTicket: ReturnTicket = new ReturnTicket();
  bankAccounts: Array<BankAccount> = new Array<BankAccount>();
  price: number = JSON.parse(sessionStorage.getItem('price'));

  passengerList1: Array<Passenger> = JSON.parse(sessionStorage.getItem('passengerList1'));
  passengerList2: Array<Passenger> = JSON.parse(sessionStorage.getItem('passengerList2'));
  schedule1: Schedule = JSON.parse(sessionStorage.getItem('schedule01'));
  schedule2: Schedule = JSON.parse(sessionStorage.getItem('schedule11'));

  showTicket: boolean;


  payment: Payment = new Payment();
  pnr1: number;
  pnr2: number;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.showTicket = false;

    this.bookingService.fetchBankAccounts(this.userId).subscribe(response => {
      this.bankAccounts = response.bankAccounts;
    });
  }

  confirmPay(accountNo: number) {

    let confirmation = confirm("Confirm Payment");

    if(confirmation === true) {
      this.returnTicket.passengerList1 = this.passengerList1;
      this.returnTicket.passengerList2 = this.passengerList2;
      this.returnTicket.price = this.price;
      this.returnTicket.firstTrip = this.schedule1;
      this.returnTicket.secondTrip = this.schedule2;
      this.returnTicket.userId = this.userId;

      this.bookingService.returnTicketBooking(this.returnTicket).subscribe(response => {

        this.payment.accountNo = accountNo;
        this.payment.pnr = response.pnr;
        this.payment.price = this.price;
        this.payment.userId = this.userId;

        this.bookingService.makePayment(this.payment).subscribe(response => {
          console.log(response);
          if(response.status === 'SUCCESS') {
            this.showTicket = true;
            this.payment.ticket = response.ticket;
          }

        });
      });

      

    }
  }


}
