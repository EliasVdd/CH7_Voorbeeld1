import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from 'src/app/shared/event.model';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  @Output() insertEvent = new EventEmitter();

  constructor(private eventService: EventService) { }

  ngOnInit(): void{
  }

  newEvent(event: Event): void{
    this.eventService.addEvent(event);
    this.insertEvent.emit(event);
  }

}
