import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddflightComponent } from './addflight/addflight.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'addFlight', component: AddflightComponent },
  { path: 'fetchSchedule', component: FlightsearchComponent },
  { path: 'addSchedule', component: AddscheduleComponent },
  { path: 'userDashboard', component: DashboardComponent },
  { path: 'userLogin', component: LoginComponent },
  { path: 'adminLogin', component: AdminloginComponent },
  { path: 'adminDashboard', component: AdmindashboardComponent },
  { path: 'userRegister', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})
export class AppRoutingModule { }
