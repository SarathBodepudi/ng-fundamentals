import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
    <h3>{{thumbnail.someProperty}}</h3>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">Click Me!</button>
  </div>
  `
})

export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '01/01/2022',
    time: '10:00',
    price: '599.99',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
}
