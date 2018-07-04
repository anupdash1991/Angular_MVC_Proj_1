import { Component, OnInit } from '@angular/core';

import {HotelSvcService} from '../shared/hotel-svc.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  constructor(private HotelSvc:HotelSvcService) { }

  ngOnInit() {
  }

}
