import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, CalendarModule,
    CalendarRoutingModule, PageTitleModule
  ],
  declarations: [CalendarComponent]
})
export class CalendarsModule { }
