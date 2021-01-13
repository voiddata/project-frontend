import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddflightComponent } from './addflight/addflight.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';


const routes: Routes = [
  { path: 'addFlight', component: AddflightComponent },
  { path: 'fetchSchedule', component: FlightsearchComponent },
  { path: 'addSchedule', component: AddscheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
