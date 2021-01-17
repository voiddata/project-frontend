import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogserviceService {

  constructor(private http: HttpClient) { }

  fetchLog(id:number):Observable<any>{
    let url="http://localhost:8585/log?q="+id;
    return this.http.get(url);
  }
}
