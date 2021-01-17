import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookTicket } from '../appdto/BookTicket';
import { FlightFetch } from '../appdto/FlightFetch';
import { Payment } from '../appdto/Payment';
import { SeatFetch } from '../appdto/SeatFetch';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  fetchBookedSeats(seatFetch: SeatFetch): Observable<any>{
    let url = "http://localhost:8080/fetchBookedSeats";
    return this.http.post(url, seatFetch); 
  }

  ticketBooking(bookTicket: BookTicket): Observable<any> {
    let url = "http://localhost:8080/bookTicket";
    return this.http.post(url, bookTicket);
  }

  makePayment(payment: Payment): Observable<any> {
    let url = "http://localhost:8080/makePayment";
    return this.http.post(url, payment);
  }

  fetchBankAccounts(userId: number): Observable<any> {
    let url = "http://localhost:8080/fetchBankAccounts";
    return this.http.post(url, userId);
  }

  fetchBookingHistory(userId: number): Observable<any> {
    let url = "http://localhost:8080/fetchBookingHistory";
    return this.http.post(url, userId);
  }

  fetchIssuedTickets(userId: number): Observable<any> {
    let url = "http://localhost:8080/fetchIssuedTickets";
    return this.http.post(url, userId);
  }

  cancelTicket(pnr: number): Observable<any> {
    let url = "http://localhost:8080/cancelTicket";
    return this.http.post(url, pnr);
  }
}
