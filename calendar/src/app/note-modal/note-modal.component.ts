import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.scss']
})
export class NoteModalComponent implements OnInit {

  @Output() close: EventEmitter<void> = new EventEmitter();
  @Input() note: Note;
  @Input() index: number;

  formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService
  ) {
    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      text: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  save = () => {
    const note: Note = new Note(this.formGroup.controls.title.value, this.formGroup.controls.text.value);
    this.eventService.addNote(note);
    this.close.emit();
  }

}
