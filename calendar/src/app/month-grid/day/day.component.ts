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
  @Input() month: number;

  date: number;
  showDetail:boolean = false;
  events: Event[];
  tasks: Task[];
  numOfEvents:number = 0;
  numOfTasks:number = 0;
  isDayInCurrentMonth: boolean = true;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.date = this.day.getDate();
    const startOfDay: Date = new Date (this.day.getFullYear() , this.day.getMonth(), this.day.getDate());
    const endOfDay: Date = new Date (this.day.getFullYear() , this.day.getMonth(), this.day.getDate() , 23, 59, 59 );
    this.eventService.eventsSubject.subscribe(events => {
      this.events = events.filter (
        event => event.startDate.getTime() >= startOfDay.getTime() &&
                 event.endDate.getTime() <=  endOfDay.getTime());
      this.numOfEvents = this.events.length;
   });

    this.eventService.tasksSubject.subscribe(tasks => {
      this.tasks = tasks.filter (
         task => task.dueDate.getFullYear() === this.day.getFullYear() &&
         task.dueDate.getMonth() === this.day.getMonth() &&
         task.dueDate.getDate() === this.day.getDate());
      this.numOfTasks = this.tasks.length; });
  }

  showDayDetail = () => {
    this.showDetail = true;
  }

  hideDayDetail = () => {
    this.showDetail = false;
  }

  checkIfDayIsInCurrentMonth = () => {
    return this.day.getMonth() === this.month;
  }
}
