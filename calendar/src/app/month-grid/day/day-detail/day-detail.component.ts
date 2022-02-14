import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../models/task';
import { Event } from '../../../models/event';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {

  @Input() tasks: Task[];
  @Input() events: Event[];
  @Input() day: Date;
  @Output() closeClick = new EventEmitter();

  taskShow: boolean=false;
  eventShow: boolean=false;


  constructor(private eventService: EventService) {}

  ngOnInit(): void {}

  close = (event) => {
    event.stopPropagation();
    this.closeClick.emit();
  }

  showTaskModal = () => { this.taskShow = true; }
  hideTaskModal = () => { this.taskShow = false; }
  showEventModal = () => { this.eventShow = true; }
  hideEventModal = () => { this.eventShow = false; }

  deleteTask = (i: number) => { this.eventService.deleteTask(i) };
  deleteEvent = (i: number) => { this.eventService.deleteEvent(i) };

}
