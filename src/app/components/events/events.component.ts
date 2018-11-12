import {Component, OnInit} from '@angular/core';
import {EventsService} from '../../services/events.service';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventsService]
})
export class EventsComponent implements OnInit {
  listEvents: Event[];

  constructor(private events: EventsService) {
  }

  ngOnInit() {
    this.events.getEvents().subscribe(
      (data) => {
        console.log(data);
        this.listEvents = data;
      }
    );
  }

}
