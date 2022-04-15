import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-sidebar',
  templateUrl: './notes-sidebar.component.html',
  styleUrls: ['./notes-sidebar.component.scss']
})
export class NotesSidebarComponent implements OnInit {

  notesShow: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNotes = () => {
    this.notesShow = !this.notesShow;
  }

}
