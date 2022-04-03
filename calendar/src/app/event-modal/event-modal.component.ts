import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';
import { formatDate } from '@angular/common';
import { ToastService } from 'src/app/services/toast.service';
import { ToastType } from 'src/app/models/toast';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit {

  @Output() close: EventEmitter<void> = new EventEmitter();

  @Input() event: Event;
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
      date: [null, [Validators.required]],
      startTime: [null, [Validators.required]],
      endTime: [null, [Validators.required]],
      recurring: [false],
      recurringFrequency: [''],
      recurringUntil: [null]
    }, {
      validators: [
        this.validateStartTimeBeforeEndTime(),
        this.validateRecurringRequired(),
        this.validateRecurringUntil()
      ]
    });
  }

  validateStartTimeBeforeEndTime = () => (group: FormGroup): ValidationErrors | null => {
    if (group.controls.startTime.value > group.controls.endTime.value) {
      return {startTimeBeforeEndTime: 'Start time must be before end time.'};
    }
    return null;
  }

  validateRecurringUntil = () => (group: FormGroup): ValidationErrors | null => {
    if (group.controls.recurring.value && group.controls.date.value > group.controls.recurringUntil.value) {
      return {dateBeforeRecurringUntil: 'Please make sure the last recurring event is after the first event.'}
    }
  }

  validateRecurringRequired = () => (group: FormGroup): ValidationErrors | null => {
    if (group.controls.recurring.value) {
      if (!group.controls.recurringFrequency.value || !group.controls.recurringUntil.value) {
        return {recurring: 'Recurring frequency and until date are required.'}
      }
    }
    return null;
  }

  toggleRecurring = () => {
    this.formGroup.controls.recurring.setValue(!this.formGroup.controls.recurring.value);
  }

  ngOnInit(): void {
    if (this.event) {
      this.formGroup.controls.name.setValue(this.event.name);
      this.formGroup.controls.date.setValue(formatDate(this.event.startDate, 'yyyy-MM-dd', 'en'));
      this.formGroup.controls.startTime.setValue(this.eventService.formatTime(this.event.startDate));
      this.formGroup.controls.endTime.setValue(this.eventService.formatTime(this.event.endDate));
      if (this.event.recurring) {
        this.formGroup.controls.recurring.setValue(this.event.recurring);
        this.formGroup.controls.recurringFrequency.setValue(this.event.recurringFrequency);
        this.formGroup.controls.recurringUntil.setValue(formatDate(this.event.recurringUntil, 'yyyy-MM-dd', 'en'));
      }
    }
  }

  save = () => {
    const startDate: Date = new Date(`${this.formGroup.controls.date.value}T${this.formGroup.controls.startTime.value}:00`);
    const endDate: Date = new Date(`${this.formGroup.controls.date.value}T${this.formGroup.controls.endTime.value}:00`);
    if (this.isEdit) {
      // edit
      this.event.startDate = startDate;
      this.event.endDate = endDate;
      this.event.name = this.formGroup.controls.name.value;
      this.event.recurring = this.formGroup.controls.recurring.value;
      this.event.recurringFrequency = this.formGroup.controls.recurringFrequency.value;
      this.event.recurringUntil = new Date(`${this.formGroup.controls.recurringUntil.value}T00:00:00`);
      this.eventService.updateEvent(this.event);
      this.toastService.addToast(ToastType.success, 'Event was edited successfully!', 5);
    } else {
      // create
      const event: Event = new Event(
        startDate,
        endDate,
        this.formGroup.controls.name.value,
        this.formGroup.controls.recurring.value,
        this.formGroup.controls.recurringFrequency.value,
        new Date(`${this.formGroup.controls.recurringUntil.value}T00:00:00`)
      );
      this.eventService.addEvent(event);
      this.toastService.addToast(ToastType.success, 'Event was created successfully!', 5);
    }
    this.close.emit();
  }

}
