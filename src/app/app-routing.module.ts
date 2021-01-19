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
import { SeatselectionComponent } from './seatselection/seatselection.component';
import { PassengerformComponent } from './passengerform/passengerform.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { SelectbankaccountComponent } from './selectbankaccount/selectbankaccount.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { UserflightsearchComponent } from './userflightsearch/userflightsearch.component';
import { AddbankaccountComponent } from './addbankaccount/addbankaccount.component';
import { FlightFiltersComponent } from './flight-filters/flight-filters.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { ReturnseatselectionComponent } from './returnseatselection/returnseatselection.component';
import { ReturnpassengerformComponent } from './returnpassengerform/returnpassengerform.component';
import { ReturnticketbookingComponent } from './returnticketbooking/returnticketbooking.component';
import { ReturnbankselectComponent } from './returnbankselect/returnbankselect.component';
import { UnregisteredBookingComponent } from './unregistered-booking/unregistered-booking.component';

const routes: Routes = [
  { path: 'userDashboard', component: DashboardComponent,
    children: [
      { path: 'bookingHistory', component: BookinghistoryComponent },
      { path: 'cancelBooking', component: CancelbookingComponent },
      { path: 'userFlightSearch', component: UserflightsearchComponent },
      { path: 'seatSelection', component: SeatselectionComponent },
      { path: 'returnSeatSelection', component: ReturnseatselectionComponent },
      { path: 'returnPassengerForm', component: ReturnpassengerformComponent },
      { path: 'passengerForm', component: PassengerformComponent },
      { path: 'ticketBooking', component: TicketbookingComponent },
      { path: 'selectBank', component: SelectbankaccountComponent },
      { path: 'addBankAccount', component: AddbankaccountComponent },
      { path: 'filterByFlightName', component: FlightFiltersComponent },
      { path: 'filterByAirport', component: SearchFlightsComponent },
      { path: 'returnTicketBooking', component: ReturnticketbookingComponent },
      { path: 'returnBankSelect', component: ReturnbankselectComponent },
      //{ path: 'unregisteredUserAccount', component: UnregisteredBookingComponent }
    ] },
  { path: 'userLogin', component: LoginComponent },
  { path: 'adminLogin', component: AdminloginComponent },
  { path: 'adminDashboard', component: AdmindashboardComponent,
    children: [
      { path: 'addFlight', component: AddflightComponent },
      { path: 'fetchSchedule', component: FlightsearchComponent },
      { path: 'addSchedule', component: AddscheduleComponent }
    ] 
  },
  { path: 'userRegister', component: RegisterComponent },
  { path: 'userFlightSearch', component: UserflightsearchComponent },          // for unregistered user also
  { path: 'addBankAccount', component: AddbankaccountComponent },
  { path: 'filterByFlightName', component: FlightFiltersComponent },
  { path: 'unregisteredUserAccount', component: UnregisteredBookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})
export class AppRoutingModule { }
