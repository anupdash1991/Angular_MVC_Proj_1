import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http'
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';

import {Hotel} from './hotel.model'

@Injectable({
  providedIn: 'root'
})
export class HotelSvcService {

  selectedHotel : Hotel; 
  constructor(private http:Http) {
     
   }

   postHotel(htl : Hotel){
     var body = JSON.stringify(htl);
     var headerOprtions = new Headers({'Content-Type':'application/json'});
     var requestOptions = new RequestOptions({method:RequestMethod.Post,headers:headerOprtions});
     

     return (this.http.post('http://localhost:30228/api/Hotels',body,requestOptions)).pipe(map(x=>x.json()));

   }

}
