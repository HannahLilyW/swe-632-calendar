import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthGridComponent } from './month-grid/month-grid.component';
import { MonthTitleComponent } from './month-grid/month-title/month-title.component';
import { DayComponent } from './month-grid/day/day.component';
import { EventComponent } from './month-grid/day/event/event.component';
import { TaskComponent } from './month-grid/day/task/task.component';
import { NoteComponent } from './month-grid/day/note/note.component';

import { EventService } from 'src/app/services/event.service';

@NgModule({
  declarations: [
    AppComponent,
    MonthGridComponent,
    MonthTitleComponent,
    DayComponent,
    EventComponent,
    TaskComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
