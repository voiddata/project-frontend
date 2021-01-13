import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AddflightComponent } from './addflight/addflight.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AddflightComponent,
    FlightsearchComponent,
    AddscheduleComponent,
    LoginComponent,
    DashboardComponent,
    AdminloginComponent,
    AdmindashboardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
