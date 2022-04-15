import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';
import { MonthNames } from 'src/app/models/monthNames';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-month-title',
  templateUrl: './month-title.component.html',
  styleUrls: ['./month-title.component.scss']
})
export class MonthTitleComponent implements OnInit {
  @Input() month: number;
  @Input() year: number;
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();
  @Output() dateChange = new EventEmitter();

  monthNames: string[] = [
    MonthNames.JAN,
    MonthNames.FEB,
    MonthNames.MAR,
    MonthNames.APR,
    MonthNames.MAY,
    MonthNames.JUN,
    MonthNames.JUL,
    MonthNames.AUG,
    MonthNames.SEP,
    MonthNames.OCT,
    MonthNames.NOV,
    MonthNames.DEC
  ];

  allowedYears: number[] = [];

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.populateAllowedYears();
    this.formGroup = this.formBuilder.group({
      month: [this.month, [Validators.required]],
      year: [this.year, [Validators.required]],
    });
  }

  populateAllowedYears = () => {
    for (let i = 2000; i <= 2100; i++) {
      this.allowedYears.push(i);
    }
  }

  monthYearChange = () => {
    this.dateChange.emit(new Date(parseInt(this.formGroup.controls.year.value), parseInt(this.formGroup.controls.month.value)));
  }

  goToToday = () => {
    this.dateChange.emit(new Date());
    this.formGroup.controls.month.setValue(new Date().getMonth());
    this.formGroup.controls.year.setValue(new Date().getFullYear());
  }

  goToNextMonth = () => {
    this.next.emit();
    this.formGroup.controls.month.setValue((parseInt(this.formGroup.controls.month.value) + 1) % 12);
    if (parseInt(this.formGroup.controls.month.value) === 0) {
      this.formGroup.controls.year.setValue(parseInt(this.formGroup.controls.year.value) + 1);
    }
  }

  goToPreviousMonth = () => {
    this.previous.emit();
    this.formGroup.controls.month.setValue((parseInt(this.formGroup.controls.month.value) + 11) % 12);
    if (parseInt(this.formGroup.controls.month.value) === 11) {
      this.formGroup.controls.year.setValue(parseInt(this.formGroup.controls.year.value) - 1);
    }
  }

}
