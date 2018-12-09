import { Injectable } from '@angular/core';
import { Event } from './event.model';

@Injectable()
export class EventService {
    private eventList: Event[] = [
        new Event('Angular fundamentals', 'Hasselt', 'Dries Swinnen', 1),
        new Event('Angular Advanced', 'Zonhoven', 'Luc Doumen', 2),
        new Event('Angular Expert', 'Neerpelt', 'Steve Jobs', 3),
    ];
    constructor() { }

    getEvents(): Event[]{
        return this.eventList;
    }

    getEvent(index: number): Event{
        return this.eventList[index];
    }

    addEvent(event: Event): void{
        this.eventList.push(event);
    }

    updateEvent(event: Event, index): void{
        this.eventList[index] = event;
    }

    removeEvent(index): void{
        this.eventList.splice(index,1);
    }
}