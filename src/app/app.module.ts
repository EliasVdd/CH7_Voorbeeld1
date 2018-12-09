import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';
import { EventService } from './shared/event.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EventFormComponent,
    NewEventComponent,
    UpdateEventComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
