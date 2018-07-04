import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelComponent } from './hotels/hotel/hotel.component';
import { HotelListComponent } from './hotels/hotel-list/hotel-list.component';
import { HotelSvcService } from './hotels/shared/hotel-svc.service';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HotelSvcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
