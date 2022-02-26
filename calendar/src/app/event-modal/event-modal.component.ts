import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit {

  @Output() close: EventEmitter<void> = new EventEmitter();

  @Input() event: Event;
  @Input() index: number;

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      date: [null, [Validators.required]],
      startTime: [null, [Validators.required]],
      endTime: [null, [Validators.required]]
    }, {
      validators: [this.validateStartTimeBeforeEndTime()]
    });
  }

  validateStartTimeBeforeEndTime = () => (group: FormGroup): ValidationErrors | null => {
    if (group.controls.startTime.value > group.controls.endTime.value) {
      return {endTime: 'Start time must be before end time.'};
    }
    return null;
  }


  ngOnInit(): void {
    if (this.event) {
      this.formGroup.controls.name.setValue(this.event.name);
      this.formGroup.controls.date.setValue(formatDate(this.event.startDate, 'yyyy-MM-dd', 'en'));
      this.formGroup.controls.startTime.setValue(this.eventService.formatTime(this.event.startDate));
      this.formGroup.controls.endTime.setValue(this.eventService.formatTime(this.event.endDate));
    }
  }

  save = () => {
    const startDate: Date = new Date(`${this.formGroup.controls.date.value}T${this.formGroup.controls.startTime.value}:00`);
    const endDate: Date = new Date(`${this.formGroup.controls.date.value}T${this.formGroup.controls.endTime.value}:00`);
    if (this.event) {
      // edit
      this.event.startDate = startDate;
      this.event.endDate = endDate;
      this.event.name = this.formGroup.controls.name.value;
      this.eventService.updateEvent(this.event);
    } else {
      // create
      const event: Event = new Event(startDate, endDate, this.formGroup.controls.name.value);
      this.eventService.addEvent(event);
    }
    this.close.emit();
  }

}
