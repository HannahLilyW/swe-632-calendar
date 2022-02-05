import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Input() day: Date;

  date: number;

  constructor() { }

  ngOnInit(): void {
    this.date = this.day.getDate();
  }

}