import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Note } from '../models/note';
import { Event } from '../models/event';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() {
    this.events = [];
    this.tasks = [];
    this.notes = [];
    this.mockData();
    this.eventsSubject.next(this.events);
    this.tasksSubject.next(this.tasks);
    this.notesSubject.next(this.notes);
  }

  public eventsSubject: BehaviorSubject<Event[]> = new BehaviorSubject([]);
  public tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject([]);
  public notesSubject: BehaviorSubject<Note[]> = new BehaviorSubject([]);
  private events: Event[];
  private tasks: Task[];
  private notes: Note[];

  addEvent = (event: Event) => {
    this.events.push(event);
    this.eventsSubject.next(this.events);
  }

  addTask = (task: Task) => {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  addNote = (note: Note) => {
    this.notes.push(note);
    this.notesSubject.next(this.notes);
  }

  mockData = () => {
    this.events.push(new Event(new Date('2022-02-14T11:00:00'),
                                new Date('2022-02-14T13:00:00'),
                                'Birthday Party: Hannah'));

    this.tasks.push(new Task(new Date('2022-02-16T16:30:00'),
                              'SWE 632 HW1 Due'));

    this.notes.push(new Note(
      'grocery list',
      'eggs, bread, butter',
      new Date('2022-02-06T10:00:00'),
      new Date('2022-02-08T11:00:00')
    ));
  }
}
