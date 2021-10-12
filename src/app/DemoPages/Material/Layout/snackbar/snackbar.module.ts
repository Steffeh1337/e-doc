import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { SnackbarComponent } from './snackbar.component';
import { SnackbarRoutingModule } from './snackbar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SnackbarRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    PageTitleModule,
  ],
  declarations: [SnackbarComponent]
})
export class SnackbarModule { }
