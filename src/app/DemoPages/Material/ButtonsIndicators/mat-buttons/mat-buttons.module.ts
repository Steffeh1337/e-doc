import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { MatButtonsComponent } from './mat-buttons.component';
import { MatButtonsRoutingModule } from './mat-buttons-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonsRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    PageTitleModule,
  ],
  declarations: [MatButtonsComponent]
})
export class MatButtonsModule { }
