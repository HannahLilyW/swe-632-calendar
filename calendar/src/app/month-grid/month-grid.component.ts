import { Component, OnInit } from '@angular/core';

/**
 * MonthGridComponent shows the calendar grid of the days of the month, plus the month title.
 */
@Component({
  selector: 'app-month-grid',
  templateUrl: './month-grid.component.html',
  styleUrls: ['./month-grid.component.scss']
})
export class MonthGridComponent implements OnInit {

  // List of dates to be displayed in the month view.
  // Includes the last few days of the previous month and the next few days of the next month.
  days: Date[] = [];
  month: number;
  date: number;
  year: number;
  singleDay: Date;
  taskShow = false;
  eventShow = false;
  noteShow = false;

  constructor() { }

  ngOnInit(): void {
    this.singleDay = new Date();
    this.populateDaysFromSingleDay(this.singleDay);
  }

  goToNextMonth = () => {
    this.singleDay.setMonth(this.singleDay.getMonth() + 1);
    this.populateDaysFromSingleDay(this.singleDay);
  }

  goToPreviousMonth = () => {
    this.singleDay.setMonth(this.singleDay.getMonth() - 1);
    this.populateDaysFromSingleDay(this.singleDay);
  }

  goToMonth = (newDate: Date) => {
    this.singleDay = newDate;
    this.populateDaysFromSingleDay(this.singleDay);
  }

  /**
   * Input: singleDay, which can be any Date
   * Modifies: this.days, this.month, this.year
   * Effects: Populates this.days to be a list of Dates
   *  with the first date in the list being the last Sunday of the month before singleDay is in,
   *  or the first of the month singleDay is in if the first is a Sunday,
   *  and the last date in the list being the first Saturday of the month after singleDay is in,
   *  or the last of the month singleDay is in if the last is a Saturday
   */
  populateDaysFromSingleDay = (singleDay: Date) => {
    console.log(singleDay);
    this.days = [];

    // Get first day of month singleDay is in
    const firstDayOfMonth: Date = new Date(singleDay.getFullYear(), singleDay.getMonth(), 1);

    // Get number of days to show from last month
    // If firstDayOfMonth is a Sunday, show 0 days from last month
    // If firstDayOfMonth is a Monday, show 1 day from last month
    // etc.
    const daysToShowFromLastMonth: number = firstDayOfMonth.getDay();

    const firstDayToShow: Date = new Date(firstDayOfMonth);
    firstDayToShow.setDate(firstDayOfMonth.getDate() - daysToShowFromLastMonth);

    // Get last day of month singleDay is in
    const lastDayOfMonth: Date = new Date(singleDay.getFullYear(), singleDay.getMonth() + 1, 0);

    // Get number of days to show from next month
    // If lastDayOfMonth is a Sunday, show 6 days from next month
    // If lastDayOfMonth is a Saturday, show 0 days from next month
    const daysToShowFromNextMonth: number = 6 - lastDayOfMonth.getDay();

    const lastDayToShow: Date = new Date (lastDayOfMonth);
    lastDayToShow.setDate(lastDayOfMonth.getDate() + daysToShowFromNextMonth);

    const numberOfDaysToShow: number = (lastDayToShow.getTime() - firstDayToShow.getTime()) / (1000 * 60 * 60 * 24) + 1;

    for (let i = 0; i < numberOfDaysToShow; i++) {
      const dateToPush = new Date(firstDayToShow);
      dateToPush.setDate(firstDayToShow.getDate() + i);
      this.days.push(dateToPush);
    }
    this.month = singleDay.getMonth();
    this.year = singleDay.getFullYear();
    this.date = singleDay.getDate();
  }

  showTaskModal = () => { this.taskShow = true; };
  showEventModal = () => { this.eventShow = true; };
  showNoteModal = () => { this.noteShow = true; };

  hideTaskModal = () => { this.taskShow = false; };
  hideEventModal = () => { this.eventShow = false; };
  hideNoteModal = () => { this.noteShow = false; };
}
