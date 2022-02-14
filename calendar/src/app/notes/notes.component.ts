import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  noteShow: boolean = false;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.notesSubject.subscribe(notes => {
      this.notes = notes;
    })
  }

  showNoteModal = () => { this.noteShow = true; }
  hideNoteModal = () => { this.noteShow = false; }

  deleteNote = (i: number) => {
    this.eventService.deleteNote(i);
  }

}
