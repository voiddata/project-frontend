import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleFetch } from './appdto/ScheduleFetch';

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
}
