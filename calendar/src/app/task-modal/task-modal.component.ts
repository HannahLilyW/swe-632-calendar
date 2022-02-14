import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {

  @Output() close: EventEmitter<void> = new EventEmitter();

  formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      dueDate:[null, [Validators.required]],
      dueTime: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {}

  save = () => {
    const dueDate: Date = new Date(`${this.formGroup.controls.dueDate.value}T${this.formGroup.controls.dueTime.value}:00`);
    const task: Task = new Task(dueDate, this.formGroup.controls.name.value);
    this.eventService.addTask(task);
    this.close.emit();
  }

}
