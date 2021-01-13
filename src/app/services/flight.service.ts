import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightFetch } from '../appdto/FlightFetch';
import { Flight } from '../appmodel/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {


  constructor(private http: HttpClient) { }

  addFlight(flightFetch: FlightFetch): Observable<any>{
    let url = "http://localhost:8080/addFlight";
    return this.http.post(url, flightFetch); 
  }

  fetchFlightList(flightFetch: FlightFetch): Observable<any>{
    let url = "http://localhost:8080/fetchAllFlights";
    return this.http.post(url, flightFetch); 
  }
}
