import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthGridComponent } from './month-grid/month-grid.component';
import { MonthTitleComponent } from './month-grid/month-title/month-title.component';
import { DayComponent } from './month-grid/day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthGridComponent,
    MonthTitleComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
