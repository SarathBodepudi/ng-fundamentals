import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div></div>
      <div>Date: {{event?.date}}</div>
      <!-- Using class. only for one CSS class -->
      <!--
      <div [class.green] = "event?.time === '8:00 am'" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      -->

      <!-- Using ngClass for multiple css class files-->
      <!--
      <div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      -->

      <!-- Simpliyfying the ngclass usage with function-->
      <!--
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      -->

      <!-- Using ngStyle-->
      <!--
      <div [ngStyle]="{'color':  event?.time === '8:00 am' ? '#003300' : '#bbb', 'font-weight': event?.time === '8:00 am' ? 'bold' : 'normal'}" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      -->

      <!-- Using ngStyle - Simplified using function-->
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>

      <div>Price: \${{event?.price}}</div>
      <div  *ngIf="event?.location">
        <span>Location :{{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div  *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>
    </div>
  `,
  styles: [`
    .pad-left {margin-left: 10px}
    .well div {color: #bbb;}
    .thumbnail {min-height: 210px}
    .green {color: #003300 !important;}
    .bold {font-weight: bold;}
  `]
})


export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeClass() {
    // THIS CAN BE DONE IN MULTIPLE WAYS
    // Method #1
    // const isEarlyStart = this.event && this.event.time === '8:00 am';
    // return {green: isEarlyStart, bold: isEarlyStart};

    // Method #2 - return String
    // if (this.event && this.event.time === '8:00 am') {
      // return 'green bold';
    // }
    // return '';

    // Method #3 - Return array
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return  {color: '#003300', 'font-weight': 'bold'};
    }
    return {};
  }
}
