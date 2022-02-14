import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit {

  @Output() close: EventEmitter<void> = new EventEmitter();

  formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      date:[null, [Validators.required]],
      startTime: [null, [Validators.required]],
      endTime: [null, [Validators.required]]
    }, {
      validators: [this.validateStartTimeBeforeEndTime()]
    });
  }

  validateStartTimeBeforeEndTime = () => (group: FormGroup): ValidationErrors | null => {
    if (group.controls.startTime.value > group.controls.endTime.value) {
      return {'endTime': 'Start time must be before end time.'}
    }
    return null;
  }
  

  ngOnInit(): void {}

  save = () => {
    const startDate: Date = new Date(`${this.formGroup.controls.date.value}T${this.formGroup.controls.startTime.value}:00`);
    const endDate: Date = new Date(`${this.formGroup.controls.date.value}T${this.formGroup.controls.endTime.value}:00`);
    const event: Event = new Event(startDate, endDate, this.formGroup.controls.name.value);
    this.eventService.addEvent(event);
    this.close.emit();
  }

}
