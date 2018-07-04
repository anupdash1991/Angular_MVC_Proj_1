import { Component, OnInit } from '@angular/core';

import {HotelSvcService} from './shared/hotel-svc.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  providers:[HotelSvcService]
})
export class HotelsComponent implements OnInit {

  constructor(private HotelSvc : HotelSvcService) { }

  ngOnInit() {
  }

}
