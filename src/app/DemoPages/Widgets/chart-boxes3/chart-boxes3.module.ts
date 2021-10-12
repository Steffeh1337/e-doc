import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartBoxes3Component } from './chart-boxes3.component';
import { ChartBoxes3RoutingModule } from './chart-boxes3-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule,
    ChartBoxes3RoutingModule, PageTitleModule,
  ],
  declarations: [ChartBoxes3Component]
})
export class ChartBoxes3Module { }
