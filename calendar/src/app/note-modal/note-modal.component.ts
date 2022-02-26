import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { ToastService } from 'src/app/services/toast.service';
import { ToastType } from 'src/app/models/toast';
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

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private toastService: ToastService
  ) {
    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      text: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.note) {
      this.formGroup.controls.title.setValue(this.note.title);
      this.formGroup.controls.text.setValue(this.note.text);
    }
  }

  save = () => {
    if (this.note) {
      // edit
      this.note.updateDate = new Date();
      this.note.title = this.formGroup.controls.title.value;
      this.note.text = this.formGroup.controls.text.value;
      this.eventService.updateNote(this.note);
      this.toastService.addToast(ToastType.success, 'Note was edited successfully!', 5);
    } else {
      // create
      const note: Note = new Note(this.formGroup.controls.title.value, this.formGroup.controls.text.value, new Date(), new Date());
      this.eventService.addNote(note);
      this.toastService.addToast(ToastType.success, 'Note was created successfully!', 5);
    }
    this.close.emit();
  }

}
