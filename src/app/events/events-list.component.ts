import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div  *ngFor="let event of events" class="col-md-5">
        <event-thumbnail [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  `
})

export class EventsListComponent implements OnInit {
  events: any[];
  // It is not good idea to inject potentially a long running service. Use component life cycle hooks instead
  // constructor(private eventService: EventService) {
    // this.events = eventService.getEvents();
  // }

  // Using life cycle hooks
  constructor(private eventService: EventService) {
    // Westill need constructor even though it is not doing anything in the body because thats where the service gets injected.
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
