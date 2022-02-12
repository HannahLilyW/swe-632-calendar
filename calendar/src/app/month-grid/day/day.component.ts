import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/models/event';
import { Task } from 'src/app/models/task';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Input() day: Date;

  date: number;
  
  events: Event[];
  tasks: Task[];

  constructor(eventService: EventService) { }

  ngOnInit(): void {
    this.date = this.day.getDate();
    this.eventService.eventsSubject.subscribe(events => { this.events = events; });
    this.eventService.tasksSubject.subscribe(tasks => { this.tasks = tasks; });
  }
}
