import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { DatepickerComponent2 } from './mat-datepicker.component';
import { DatepickerRoutingModule } from './mat-datepicker-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DatepickerRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    PageTitleModule,
  ],
  declarations: [DatepickerComponent2]
})
export class DatepickerModule { }
