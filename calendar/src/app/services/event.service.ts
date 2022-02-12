import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Note } from '../models/note';
import { Event } from '../models/event';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
  event: Event[];
  task: Task[];
  note: Note[];
}
