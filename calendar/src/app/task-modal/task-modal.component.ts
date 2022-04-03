import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { EventService } from 'src/app/services/event.service';
import { ToastService } from 'src/app/services/toast.service';
import { ToastType } from 'src/app/models/toast';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {

  @Output() close: EventEmitter<void> = new EventEmitter();

  @Input() task: Task;
  @Input() isEdit: boolean = false;
  @Input() index: number;

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private toastService: ToastService
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      dueDate: [null, [Validators.required]],
      dueTime: [null, [Validators.required]],
      recurring: [false],
      recurringFrequency: [''],
      recurringUntil: [null]
    }, {
      validators: [
        this.validateRecurringRequired(),
        this.validateRecurringUntil()
      ]
    });
  }

  validateRecurringRequired = () => (group: FormGroup): ValidationErrors | null => {
    if (group.controls.recurring.value) {
      if (!group.controls.recurringFrequency.value || !group.controls.recurringUntil.value) {
        return {recurring: 'Recurring frequency and until date are required.'}
      }
    }
    return null;
  }

  validateRecurringUntil = () => (group: FormGroup): ValidationErrors | null => {
    if (group.controls.recurring.value && group.controls.dueDate.value > group.controls.recurringUntil.value) {
      return {dateBeforeRecurringUntil: 'Please make sure the last recurring task is after the first task.'}
    }
  }

  toggleRecurring = () => {
    this.formGroup.controls.recurring.setValue(!this.formGroup.controls.recurring.value);
  }

  ngOnInit(): void {
    if (this.task) {
      this.formGroup.controls.name.setValue(this.task.name);
      this.formGroup.controls.dueDate.setValue(formatDate(this.task.dueDate, 'yyyy-MM-dd', 'en'));
      this.formGroup.controls.dueTime.setValue(this.eventService.formatTime(this.task.dueDate));
      if (this.task.recurring) {
        this.formGroup.controls.recurring.setValue(this.task.recurring);
        this.formGroup.controls.recurringFrequency.setValue(this.task.recurringFrequency);
        this.formGroup.controls.recurringUntil.setValue(formatDate(this.task.recurringUntil, 'yyyy-MM-dd', 'en'));
      }
    }
  }

  save = () => {
    const dueDate: Date = new Date(`${this.formGroup.controls.dueDate.value}T${this.formGroup.controls.dueTime.value}:00`);
    if (this.isEdit) {
      // edit
      this.task.dueDate = dueDate;
      this.task.name = this.formGroup.controls.name.value;
      this.task.recurring = this.formGroup.controls.recurring.value;
      this.task.recurringFrequency = this.formGroup.controls.recurringFrequency.value;
      this.task.recurringUntil = new Date(`${this.formGroup.controls.recurringUntil.value}T00:00:00`);
      this.eventService.updateTask(this.task);
      this.toastService.addToast(ToastType.success, 'Event was edited successfully!', 5);
    } else {
      // create
      const task: Task = new Task(
        dueDate,
        this.formGroup.controls.name.value,
        this.formGroup.controls.recurring.value,
        this.formGroup.controls.recurringFrequency.value,
        new Date(`${this.formGroup.controls.recurringUntil.value}T00:00:00`)
      );
      this.eventService.addTask(task);
      this.toastService.addToast(ToastType.success, 'Event was created successfully!', 5);
    }
    this.close.emit();
  }

}
