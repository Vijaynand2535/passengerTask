import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material/material.module';
import { PassengerModule } from './shared/passenger/passenger/passenger.module';
import { PassengerDashboardComponent } from './shared/passenger/passenger-dashboard/passenger-dashboard.component';
import { PassCardComponent } from './shared/passenger/passenger-dashboard/pass-card/pass-card.component';
import { PassCountComponent } from './shared/passenger/passenger-dashboard/pass-count/pass-count.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PassengerDashboardComponent,
    PassCardComponent,
    PassCountComponent
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    PassengerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
