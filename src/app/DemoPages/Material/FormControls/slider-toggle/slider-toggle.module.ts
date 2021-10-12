import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { SliderToggleComponent } from './slider-toggle.component';
import { SliderToggleRoutingModule } from './slider-toggle-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SliderToggleRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    PageTitleModule,
  ],
  declarations: [SliderToggleComponent]
})
export class SliderToggleModule { }
