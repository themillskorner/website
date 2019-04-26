import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {IEvent} from '../../_interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  events: IEvent[];

  constructor() {
    this.events = [
      {
        date: new Date('4/24/2019'),
        title: 'Fortnite Tournament',
        details: 'Suspendisse viverra massam eget nibhe ultricies mollis. Donec sed lorem tincidunt, ultrices ligula ut, euismod sem. ' +
          'Mauris nec tincidunt diam. Donec varius magna vitae velit consectetur efficitur.',
        price: 2500
      }
    ];
  }

  all(): Observable<IEvent[]> {
    return of(this.events);
  }

  get(slug): Observable<IEvent> {
    return of(this.events.find(e => e.title.toLowerCase() === slug));
  }
}
