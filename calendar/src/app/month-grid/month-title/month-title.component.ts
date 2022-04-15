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
  @Input() date: number;
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

  currentDate: string

  allowedYears: number[] = [];

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.populateAllowedYears();
    this.formGroup = this.formBuilder.group({
      month: [this.month, [Validators.required]],
      year: [this.year, [Validators.required]],
      date: [this.date]
    });
    
    this.setDate();
  }

  populateAllowedYears = () => {
    for (let i = 2000; i <= 2100; i++) {
      this.allowedYears.push(i);
    }
  }

  monthYearChange = (e) => {
    if (e.target.name === "mobileDate") {
      let split = e.target.value.split("-");
      this.formGroup.controls.year.setValue(split[0]);
      this.formGroup.controls.month.setValue(`${parseInt(split[1])-1}`);
      this.formGroup.controls.date.setValue(split[2]);
    }
    this.dateChange.emit(new Date(parseInt(this.formGroup.controls.year.value), parseInt(this.formGroup.controls.month.value), parseInt(this.formGroup.controls.date.value)));
  }

  goToNextMonth = (emit:boolean = true) => {
    console.log(emit);
    if (emit) this.next.emit();
    this.formGroup.controls.month.setValue((parseInt(this.formGroup.controls.month.value) + 1) % 12);
    if (parseInt(this.formGroup.controls.month.value) === 0) {
      this.formGroup.controls.year.setValue(parseInt(this.formGroup.controls.year.value) + 1);
    }
    this.setDate();
  }

  goToPreviousMonth = (emit:boolean = true) => {
    console.log(emit);
    if (emit) this.previous.emit();
    this.formGroup.controls.month.setValue((parseInt(this.formGroup.controls.month.value) + 11) % 12);
    if (parseInt(this.formGroup.controls.month.value) === 11) {
      this.formGroup.controls.year.setValue(parseInt(this.formGroup.controls.year.value) - 1);
    }
    this.setDate();
  }

  goToNextDay = () => {
    let newDay = ((this.formGroup.controls.date.value + 1) % this.getLastDayOfMonth()) === 0 ? this.getLastDayOfMonth() : (this.formGroup.controls.date.value + 1) % this.getLastDayOfMonth();
    if (newDay === 1) {
      this.goToNextMonth(false);
    }
    this.formGroup.controls.date.setValue(newDay);
    this.setDate();
    this.dateChange.emit(new Date(parseInt(this.formGroup.controls.year.value), parseInt(this.formGroup.controls.month.value), parseInt(this.formGroup.controls.date.value)));
  }

  goToPreviousDay = () => {
    let lastDayofPreviousMonth = this.getLastDayOfMonth(this.formGroup.controls.month.value - 1)
    let newDay = (this.formGroup.controls.date.value - 1) < 1 ? lastDayofPreviousMonth : this.formGroup.controls.date.value - 1;
    if (newDay === lastDayofPreviousMonth && (this.formGroup.controls.date.value - 1) < 1) {
      this.goToPreviousMonth(false);
    }
    this.formGroup.controls.date.setValue(newDay);
    this.setDate();
    this.dateChange.emit(new Date(parseInt(this.formGroup.controls.year.value), parseInt(this.formGroup.controls.month.value), parseInt(this.formGroup.controls.date.value)));
  }

  /**
   * 
   * @param m the month that you want to get the last day of. It will default to the current month.
   * @param y  the year of the month that you want to get the last day of
   * @returns the last day of the given month
   */
  getLastDayOfMonth = (m=this.formGroup.controls.month.value, y=this.formGroup.controls.year.value ) => {
    let d = new Date(y, m + 1, 0);
    return d.getDate();
  }

  setDate() {
    let month = parseInt(this.formGroup.controls.month.value) + 1 < 10 ? `0${parseInt(this.formGroup.controls.month.value) + 1}` : parseInt(this.formGroup.controls.month.value) + 1;
    let date = parseInt(this.formGroup.controls.date.value) < 10 ? `0${this.formGroup.controls.date.value}` : this.formGroup.controls.date.value;
    this.currentDate = `${this.formGroup.controls.year.value}-${month}-${date}`
  }
}
