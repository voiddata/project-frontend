import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightSearch } from '../appdto/FlightSearch';
import { ScheduleFetch } from '../appdto/ScheduleFetch';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  fetchScheduleList(scheduleFetch: ScheduleFetch): Observable<any>{
    let url = "http://localhost:8080/fetchFullSchedule";
    return this.http.post(url, scheduleFetch); 
  }

  addSchedule(scheduleFetch: ScheduleFetch): Observable<any> {
    let url = "http://localhost:8080/addSchedule";
    return this.http.post(url, scheduleFetch);
  }

  fetchScheduleForUser(flightSearch: FlightSearch): Observable<any> {
    let url = "http://localhost:8080/fetchScheduleForUser";
    return this.http.post(url, flightSearch);
  }
}
