import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { ChipsComponent } from './chips.component';
import { ChipsRoutingModule } from './chips-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChipsRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    PageTitleModule,
  ],
  declarations: [ChipsComponent]
})
export class ChipsModule { }
