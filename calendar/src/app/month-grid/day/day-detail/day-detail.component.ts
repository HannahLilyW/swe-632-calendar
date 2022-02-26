import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../models/task';
import { Event } from '../../../models/event';
import { EventService } from '../../../services/event.service';
import { ToastService } from '../../../services/toast.service';
import { ToastType } from '../../../models/toast';

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

  taskShow: Task = null;
  eventShow: Event = null;


  constructor(
    private eventService: EventService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  close = (event) => {
    event.stopPropagation();
    this.closeClick.emit();
  }

  showTaskModal = (task: Task) => { this.taskShow = task; };
  hideTaskModal = () => { this.taskShow = null; };
  showEventModal = (event: Event) => { this.eventShow = event; };
  hideEventModal = () => { this.eventShow = null; };

  deleteTask = (task: Task) => {
    this.eventService.deleteTask(task);
    this.toastService.addToast(ToastType.success, 'Task was deleted successfully!', 5)
  };
  deleteEvent = (event: Event) => {
    this.eventService.deleteEvent(event);
    this.toastService.addToast(ToastType.success, 'Event was deleted successfully!', 5)
  };

}
