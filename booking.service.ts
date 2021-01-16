import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingLog } from './appmodel/BookingLog';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  book(bookingLog:BookingLog):Observable<any>{
    let url="http://localhost:8585/booking";
     return this.http.post(url,bookingLog);
   } 
}
