import { Component, OnInit } from '@angular/core';
import { ScheduleFetch } from '../appdto/ScheduleFetch';
import { Flight } from '../appmodel/Flight';
import { Schedule } from '../appmodel/Schedule';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css']
})
export class FlightsearchComponent implements OnInit {

  scheduleFetch: ScheduleFetch = new ScheduleFetch();

  scheduleList: Array<Schedule>;

  successMsg: boolean;
  failureMsg: boolean;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
  }

  fetchSchedule() {
    this.scheduleService.fetchScheduleList(this.scheduleFetch).subscribe(response => {
      console.log(response.status);
      this.scheduleList = response.schedule;
      if(response.status === 'SUCCESS')
        this.successMsg = true;
      else if(response.status === 'FAILED')
        this.failureMsg = true;
      console.log(response);
    });
  }
}
