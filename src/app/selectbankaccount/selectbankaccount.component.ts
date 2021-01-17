import { Component, OnInit } from '@angular/core';
import { BookTicket } from '../appdto/BookTicket';
import { Payment } from '../appdto/Payment';
import { BankAccount } from '../appmodel/BankAccount';
import { Passenger } from '../appmodel/Passenger';
import { Schedule } from '../appmodel/Schedule';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-selectbankaccount',
  templateUrl: './selectbankaccount.component.html',
  styleUrls: ['./selectbankaccount.component.css']
})
export class SelectbankaccountComponent implements OnInit {

  userId: number = JSON.parse(sessionStorage.getItem('id'));
  bookTicket: BookTicket = new BookTicket();
  bankAccounts: Array<BankAccount> = new Array<BankAccount>();
  price: number = JSON.parse(sessionStorage.getItem('price'));
  passengerList: Array<Passenger> = JSON.parse(sessionStorage.getItem('passengerList'));
  schedule: Schedule = JSON.parse(sessionStorage.getItem('schedule'));

  showTicket: boolean;


  payment: Payment = new Payment();
  pnr: number;

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
      this.bookTicket.passengerList = this.passengerList;
      this.bookTicket.price = this.price;
      this.bookTicket.schedule = this.schedule;
      this.bookTicket.userId = this.userId;

      this.bookingService.ticketBooking(this.bookTicket).subscribe(response => {

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
