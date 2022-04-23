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
    const index = this.events.findIndex((e => e.uuid === event.uuid));
    this.events[index] = event;
    this.eventsSubject.next(this.events);
  }

  deleteEvent = (event: Event) => {
    const index = this.events.findIndex((e => e.uuid === event.uuid));
    this.events.splice(index, 1);
    this.eventsSubject.next(this.events);
  }

  addTask = (task: Task) => {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  updateTask = (task: Task) => {
    const index = this.tasks.findIndex((t => t.uuid === task.uuid));
    this.tasks[index] = task;
    this.tasksSubject.next(this.tasks);
  }

  deleteTask = (task: Task) => {
    const index = this.tasks.findIndex((t => t.uuid === task.uuid));
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
    this.events.push(new Event(new Date('2022-04-14T11:00:00'),
                                new Date('2022-04-14T13:00:00'),
                                'Birthday Party: Hannah'));
    this.events.push(new Event(new Date('2022-04-14T11:00:00'),
                                new Date('2022-04-14T13:00:00'),
                                'Birthday Party: Jhabiz'));
    this.events.push(new Event(new Date('2022-04-14T11:00:00'),
                                new Date('2022-04-14T13:00:00'),
                                'Birthday Party: Yugank'));
    this.events.push(new Event(new Date('2022-04-14T14:00:00'),
                                new Date('2022-04-14T15:00:00'),
                                'Shopping trip'));
    this.events.push(new Event(new Date('2022-04-14T16:00:00'),
                                new Date('2022-04-14T17:00:00'),
                                'Dinner'));

    this.tasks.push(new Task(new Date('2022-04-14T16:30:00'),
                              'Homework'));
    this.tasks.push(new Task(new Date('2022-04-14T16:30:00'),
                              'More Homework'));
    this.tasks.push(new Task(new Date('2022-04-14T16:30:00'),
                              'So Much Homework'));
    this.tasks.push(new Task(new Date('2022-04-14T16:30:00'),
                              'Chill'));

    this.notes.push(new Note(
      'Grocery List',
      'Eggs, bread, butter',
      new Date('2022-02-06T10:00:00'),
      new Date('2022-02-08T11:00:00')
    ));
    this.notes.push(new Note(
      'Thoughts',
      'Programming is kinda fun I guess',
      new Date('2022-02-06T10:00:00'),
      new Date('2022-02-08T11:00:00')
    ));
    this.notes.push(new Note(
      'Thoughts 2',
      'Not really tho',
      new Date('2022-02-06T10:00:00'),
      new Date('2022-02-08T11:00:00')
    ));
    this.notes.push(new Note(
      'Thoughts 3',
      'Hannah is an edgelord',
      new Date('2022-02-06T10:00:00'),
      new Date('2022-02-08T11:00:00')
    ));
  }

  formatTime = (inputDate: Date): string => {
    return `${(inputDate.getHours() < 10 ? '0' : '') + inputDate.getHours()}:${(inputDate.getMinutes() < 10 ? '0' : '') +
    inputDate.getMinutes()}`;
  }
}
