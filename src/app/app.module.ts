import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddflightComponent } from './addflight/addflight.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';

@NgModule({
  declarations: [
    AppComponent,
    AddflightComponent,
    FlightsearchComponent,
    AddscheduleComponent
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
