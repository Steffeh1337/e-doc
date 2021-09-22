import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { RadioComponent } from './radio.component';
import { RadioRoutingModule } from './radio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RadioRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSlideToggleModule,
    PageTitleModule,
  ],
  declarations: [RadioComponent]
})
export class RadioModule { }
