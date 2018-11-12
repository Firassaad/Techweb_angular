import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class EventsService {

  constructor(private http: Http) {
    console.log("service events ")
  }
  getEvents(){
    return this.http.get('../assets/events.json').map(res=>res.json())
  }
}
