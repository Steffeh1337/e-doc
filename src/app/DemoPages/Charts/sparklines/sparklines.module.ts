import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendModule } from 'ngx-trend';
import { SparklinesComponent } from './sparklines.component';
import { SparklinestRoutingModule } from './sparklines-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, TrendModule,
    SparklinestRoutingModule, PageTitleModule
  ],
  declarations: [SparklinesComponent]
})
export class SparklinesModule { }
