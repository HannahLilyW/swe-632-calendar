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

  updateEvent = (event: Event) => {
    const index = this.events.findIndex((e => e.uuid == event.uuid));
    this.events[index] = event;
    this.eventsSubject.next(this.events);
  }

  deleteEvent = (event: Event) => {
    const index = this.events.findIndex((e => e.uuid == event.uuid));
    this.events.splice(index, 1);
    this.eventsSubject.next(this.events);
  }

  addTask = (task: Task) => {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  updateTask = (task: Task) => {
    const index = this.tasks.findIndex((t => t.uuid == task.uuid));
    this.tasks[index] = task;
    this.tasksSubject.next(this.tasks);
  }

  deleteTask = (task: Task) => {
    console.log('tasks: ' + this.tasks);
    console.log(task);
    const index = this.tasks.findIndex((t => t.uuid == task.uuid));
    console.log(index);
    this.tasks.splice(index, 1);
    this.tasksSubject.next(this.tasks);
  }

  addNote = (note: Note) => {
    this.notes.push(note);
    this.notesSubject.next(this.notes);
  }

  updateNote = (note: Note) => {
    const index = this.notes.findIndex((n => n.uuid === note.uuid));
    this.notes[index] = note;
    this.notesSubject.next(this.notes);
  }

  deleteNote = (note: Note) => {
    const index = this.notes.findIndex((t => t.uuid === note.uuid));
    this.notes.splice(index, 1);
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

  formatTime = (inputDate: Date): string => {
    return `${(inputDate.getHours() < 10 ? '0' : '') + inputDate.getHours()}:${(inputDate.getMinutes() < 10 ? '0' : '') +
    inputDate.getMinutes()}`;
  }
}
