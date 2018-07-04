import { Component, OnInit } from '@angular/core';

import {HotelSvcService} from '../shared/hotel-svc.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(private HotelSvc:HotelSvcService) { }

  ngOnInit() {
    this.resetForm
  } 

  resetForm(form:NgForm){
    if(form != null)
    {
      form.reset();
    }    
    this.HotelSvc.selectedHotel = {
      HotelID : null,
      Hotel_Name : '',
      Location  : '',
      Available_Room : '',
      Description : ''
    }
  }

  onSubmit(form : NgForm){
    this.HotelSvc.postHotel(form.value)
    .subscribe(data => {
      this.resetForm(form);
    })

  }

}
