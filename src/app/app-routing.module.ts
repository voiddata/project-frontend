import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddflightComponent } from './addflight/addflight.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'addFlight', component: AddflightComponent },
  { path: 'fetchSchedule', component: FlightsearchComponent },
  { path: 'addSchedule', component: AddscheduleComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})
export class AppRoutingModule { }
