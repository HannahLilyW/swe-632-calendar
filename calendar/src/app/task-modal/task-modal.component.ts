import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { EventService } from 'src/app/services/event.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {

  @Output() close: EventEmitter<void> = new EventEmitter();

  @Input() task: Task;
  @Input() index: number;

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      dueDate: [null, [Validators.required]],
      dueTime: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.task) {
      this.formGroup.controls.name.setValue(this.task.name);
      this.formGroup.controls.dueDate.setValue(formatDate(this.task.dueDate, 'yyyy-MM-dd', 'en'));
      this.formGroup.controls.dueTime.setValue(this.eventService.formatTime(this.task.dueDate));
    }
  }

  save = () => {
    const dueDate: Date = new Date(`${this.formGroup.controls.dueDate.value}T${this.formGroup.controls.dueTime.value}:00`);
    if (this.task) {
      // edit
      this.task.dueDate = dueDate;
      this.task.name = this.formGroup.controls.name.value;
      this.eventService.updateTask(this.task);
    } else {
      // create
      const task: Task = new Task(dueDate, this.formGroup.controls.name.value);
      this.eventService.addTask(task);
    }
    this.close.emit();
  }

}
