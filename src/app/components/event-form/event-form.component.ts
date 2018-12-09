import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from 'src/app/shared/event.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  eventForm: FormGroup;
  @Input() event?: Event;
  @Output() submitForm = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.generateForm();
  }

  ngOnChanges(): void{
    this.generateForm();
  }

  generateForm(): void{
    this.eventForm = this.formBuilder.group({
      name: [(this.event ? this.event.name : null), Validators.required],
      location: [(this.event ? this.event.location : null), Validators.required],
      speaker: [(this.event ? this.event.speaker : null)],
      level: [(this.event ? this.event.level : 0)]
    });
  }

  onSubmit(): void{
    let submittedEvent: Event = this.eventForm.value;
    this.submitForm.emit(submittedEvent);
  }

}
