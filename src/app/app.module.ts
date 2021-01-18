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
import { RegisterComponent } from './register/register.component';
import { UserflightsearchComponent } from './userflightsearch/userflightsearch.component';
import { SeatselectionComponent } from './seatselection/seatselection.component';
import { PassengerformComponent } from './passengerform/passengerform.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { SelectbankaccountComponent } from './selectbankaccount/selectbankaccount.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { AddbankaccountComponent } from './addbankaccount/addbankaccount.component';
import { FlightFiltersComponent } from './flight-filters/flight-filters.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { ReturnseatselectionComponent } from './returnseatselection/returnseatselection.component';
import { ReturnpassengerformComponent } from './returnpassengerform/returnpassengerform.component';
import { ReturnticketbookingComponent } from './returnticketbooking/returnticketbooking.component';
import { ReturnbankselectComponent } from './returnbankselect/returnbankselect.component';

@NgModule({
  declarations: [
    AppComponent,
    AddflightComponent,
    FlightsearchComponent,
    AddscheduleComponent,
    LoginComponent,
    DashboardComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    RegisterComponent,
    UserflightsearchComponent,
    SeatselectionComponent,
    PassengerformComponent,
    TicketbookingComponent,
    SelectbankaccountComponent,
    BookinghistoryComponent,
    CancelbookingComponent,
    AddbankaccountComponent,
    FlightFiltersComponent,
    SearchFlightsComponent,
    ReturnseatselectionComponent,
    ReturnpassengerformComponent,
    ReturnticketbookingComponent,
    ReturnbankselectComponent
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
