import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Note } from '../models/note';
import { Event } from '../models/event';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { 
    this.events = [];
    this.events.push( new Event(new Date("2022-02-14T11:00:00") ,
    new Date("2022-02-14T13:00:00"),
    "Birthday Party: Hannah"
     ));
    this.tasks = [];
    this.tasks.push(new Task(new Date("2022-02-16T16:30:00"),
     "SWE 632 HW1 Due"));
    this.notes = [];
    this.notes.push(new Note( new Date("2022-02-06T10:00:00"),
    new Date("2022-02-08T 11:00:00"), 
    "eggs, bread, butter", "grocery list"));
  }
  events: Event[];
  tasks: Task[];
  notes: Note[];
}
