import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { DatepickerRoutingModule } from './datepicker-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, NgbModule, FormsModule, ReactiveFormsModule,
    DatepickerRoutingModule, PageTitleModule
  ],
  declarations: [DatepickerComponent]
})
export class DatepickerModule { }
