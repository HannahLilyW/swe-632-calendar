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
  noteShow: Note = null;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.notesSubject.subscribe(notes => {
      this.notes = notes;
    });
  }

  showNoteModal = (note: Note) => { this.noteShow = note; };
  hideNoteModal = () => { this.noteShow = null; };

  deleteNote = (note: Note) => {
    this.eventService.deleteNote(note);
  }

}
