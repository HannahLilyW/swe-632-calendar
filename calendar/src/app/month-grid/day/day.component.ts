import { Component, OnInit, Input} from '@angular/core';
import { Event } from 'src/app/models/event';
import { Task } from 'src/app/models/task';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Input() set day(value: Date) {
    this.date = value;
    this.ngOnInit();
  }
  @Input() month: number;

  date: Date;
  showDetail = false;
  events: Event[];
  tasks: Task[];
  numOfEvents = 0;
  numOfTasks = 0;

  isToday = true;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.eventService.eventsSubject.subscribe(events => {
      this.events = events.filter (event => this.eventInDay(event));
      this.numOfEvents = this.events.length;
    });

    this.eventService.tasksSubject.subscribe(tasks => {
      this.tasks = tasks.filter (task => this.taskInDay(task));
      this.numOfTasks = this.tasks.length; 
    });

    this.isToday = (
      this.date.getFullYear() === new Date().getFullYear() &&
      this.date.getMonth() === new Date().getMonth() &&
      this.date.getDate() === new Date().getDate()
    );
  }

  /**
   * Return true if 2 dates are the same, not caring about their hours minutes seconds etc.
   * Else return false.
   */
  sameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  /**
   * Return true if date1 is on or before date2, not caring about hours minutes seconds etc.
   * Else return false.
   */
  date1OnOrBeforeDate2 = (date1: Date, date2: Date) => {
    return (this.sameDay(date1, date2) || date1 < date2)
  }

  /**
   * Event should show up in day if either:
   * 1. It is not recurring and its date is on this day.
   * 2. It is recurring daily, and its first date is before or on this day, and its recurringUntil date is after or on this day.
   * 3. It is recurring weekly, and its first date is before or on this day, and its recurringUntil date is after or on this day, and the
   *    start date's weekday is the same as this day.
   * 4. It is recurring monthly, and its first date is before or on this day, and its recurringUntil date is after or on this day, and the
   *    start date's day of the month is the same as this day.
   */
  eventInDay = (event: Event) => {
    // Case 1: Not recurring
    if (!event.recurring) {
      return (this.sameDay(event.startDate, this.date));
    } else {
      // Case 2: Recurring daily
      if (event.recurringFrequency === 'DAILY') {
        return (this.date1OnOrBeforeDate2(event.startDate, this.date) && 
          this.date1OnOrBeforeDate2(this.date, event.recurringUntil)
        );
      }
  
      // Case 3: Recurring weekly
      if (event.recurringFrequency === 'WEEKLY') {
        return (this.date1OnOrBeforeDate2(event.startDate, this.date) && 
          this.date1OnOrBeforeDate2(this.date, event.recurringUntil) &&
          this.date.getDay() === event.startDate.getDay()
        );
      }
  
      // Case 4: Recurring monthly
      if (event.recurringFrequency === 'MONTHLY') {
        return (this.date1OnOrBeforeDate2(event.startDate, this.date) && 
          this.date1OnOrBeforeDate2(this.date, event.recurringUntil) &&
          this.date.getDate() === event.startDate.getDate()
        );
      }
    }
  }

  debug = () => {
    console.log(this.date);
  }

  /**
   * Task should show up in day if either:
   * 1. It is not recurring and its date is on this day.
   * 2. It is recurring daily, and its first date is before or on this day, and its recurringUntil date is after or on this day.
   * 3. It is recurring weekly, and its first date is before or on this day, and its recurringUntil date is after or on this day, and the
   *    start date's weekday is the same as this day.
   * 4. It is recurring monthly, and its first date is before or on this day, and its recurringUntil date is after or on this day, and the
   *    start date's day of the month is the same as this day.
   */
  taskInDay = (task: Task) => {
    // Case 1: Not recurring
    if (!task.recurring) {
      return (this.sameDay(task.dueDate, this.date));
    } else {
      // Case 2: Recurring daily
      if (task.recurringFrequency === 'DAILY') {
        return (this.date1OnOrBeforeDate2(task.dueDate, this.date) && 
          this.date1OnOrBeforeDate2(this.date, task.recurringUntil)
        );
      }

      // Case 3: Recurring weekly
      if (task.recurringFrequency === 'WEEKLY') {
        return (this.date1OnOrBeforeDate2(task.dueDate, this.date) && 
          this.date1OnOrBeforeDate2(this.date, task.recurringUntil) &&
          this.date.getDay() === task.dueDate.getDay()
        );
      }

      // Case 4: Recurring monthly
      if (task.recurringFrequency === 'MONTHLY') {
        return (this.date1OnOrBeforeDate2(task.dueDate, this.date) && 
          this.date1OnOrBeforeDate2(this.date, task.recurringUntil) &&
          this.date.getDate() === task.dueDate.getDate()
        );
      }
    }
  }

  showDayDetail = () => {
    this.showDetail = true;
  }

  hideDayDetail = () => {
    this.showDetail = false;
  }

  checkIfDayIsInCurrentMonth = () => {
    return this.date.getMonth() === this.month;
  }
}
