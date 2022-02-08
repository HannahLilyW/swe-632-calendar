import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';
import { MonthNames } from 'src/app/models/monthNames';

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

  constructor() { }

  ngOnInit(): void {
  }

  goToNextMonth = () => {
    this.next.emit();
  }

  goToPreviousMonth = () => {
    this.previous.emit();
  }

}
