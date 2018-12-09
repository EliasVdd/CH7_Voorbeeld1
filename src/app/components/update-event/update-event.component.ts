import { Component, OnInit, Input, Output } from '@angular/core';
import { Event } from 'src/app/shared/event.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  @Input() event: Event;
  @Output() updateEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onUpdateEvent(event: Event): void{
    this.updateEvent.emit(event);
  }

}
