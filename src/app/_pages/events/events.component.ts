import {Component, OnInit} from '@angular/core';
import {IEvent} from '../../_interfaces/event';
import {EventsService} from '../../_services/events/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: IEvent[];

  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {
    this.eventsService.all().subscribe(events => this.events = events);
  }

}
