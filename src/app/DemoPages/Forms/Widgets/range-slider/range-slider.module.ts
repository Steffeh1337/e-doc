import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeSliderComponent } from './range-slider.component';
import { RangeSliderRoutingModule } from './range-slider-routing.module';
import { NouisliderModule } from 'ng2-nouislider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, NgbModule, FormsModule, ReactiveFormsModule,
    RangeSliderRoutingModule, PageTitleModule, NouisliderModule
  ],
  declarations: [RangeSliderComponent]
})
export class RangeSliderModule { }
