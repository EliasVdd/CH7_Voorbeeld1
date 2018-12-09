import { Component } from '@angular/core';
import { Event } from './shared/event.model';
import { EventService } from './shared/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: Event[];
  isUpdating: boolean = false;
  updatingIndex: number;
  updatingEvent: Event;

  constructor(private eventService: EventService) { }

  ngOnInit() {
   this.refreshList();
  }

  refreshList(): void{
    this.events = this.eventService.getEvents();
  }

  triggerUpdate(index: number){
    this.isUpdating = true;
    this.updatingIndex = index;
    this.updatingEvent = this.eventService.getEvent(index);
  }

  finishUpdate(event: Event){
    this.eventService.updateEvent(event, this.updatingIndex);
    this.isUpdating = false;
    this.updatingEvent = undefined;
    this.refreshList();
  }

}
