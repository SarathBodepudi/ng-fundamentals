import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <!-- eventClick must match the name of the output event in the child component EventThumbnailComponent -->
    <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
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

  handleEventClicked(data) {
    console.log('received :', data);
  }
}
