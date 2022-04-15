import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthGridComponent } from './month-grid/month-grid.component';
import { MonthTitleComponent } from './month-grid/month-title/month-title.component';
import { DayComponent } from './month-grid/day/day.component';

import { EventService } from 'src/app/services/event.service';
import { ToastService } from 'src/app/services/toast.service';
import { DayDetailComponent } from './month-grid/day/day-detail/day-detail.component';
import { ModalComponent } from './shared/modal/modal.component';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { EventModalComponent } from './event-modal/event-modal.component';
import { NoteModalComponent } from './note-modal/note-modal.component';
import { NotesComponent } from './notes/notes.component';

import { NewlinePipe } from 'src/app/pipes/newline.pipe';
import { ToastComponent } from './shared/toast/toast.component';
import { NotesSidebarComponent } from './shared/notes-sidebar/notes-sidebar.component';
import { ActivityLogSidebarComponent } from './shared/activity-log-sidebar/activity-log-sidebar.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthGridComponent,
    MonthTitleComponent,
    DayComponent,
    DayDetailComponent,
    ModalComponent,
    TaskModalComponent,
    EventModalComponent,
    NoteModalComponent,
    NotesComponent,
    NewlinePipe,
    ToastComponent,
    NotesSidebarComponent,
    ActivityLogSidebarComponent,
    ActivityLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    ToastService
  ],
  bootstrap: [AppComponent],
  exports: [NewlinePipe]
})
export class AppModule { }
