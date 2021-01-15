import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightFetch } from '../appdto/FlightFetch';
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
}
