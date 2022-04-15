import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { EventService } from 'src/app/services/event.service';
import { ToastService } from 'src/app/services/toast.service';
import { ToastType } from 'src/app/models/toast';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  noteShow: Note = null;
  deleteNoteConfirm: Note = null;

  constructor(
    private eventService: EventService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.eventService.notesSubject.subscribe(notes => {
      this.notes = notes;
    });
  }

  showNoteModal = (note: Note = null) => {
    if (note) {
      this.noteShow = note;
    } else {
      this.noteShow = new Note('', ''); 
    }
  };
  hideNoteModal = () => { this.noteShow = null; };

  deleteNote = (note: Note) => {
    this.eventService.deleteNote(note);
    this.toastService.addToast(ToastType.success, 'Note was deleted successfully!', 5);
  }

}
