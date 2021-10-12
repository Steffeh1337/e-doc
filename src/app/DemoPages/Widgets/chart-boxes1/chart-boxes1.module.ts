import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartBoxes1Component } from './chart-boxes1.component';
import { ChartBoxes1RoutingModule } from './chart-boxes1-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, FontAwesomeModule, RoundProgressModule,
    ChartBoxes1RoutingModule, PageTitleModule, MatTabsModule
  ],
  declarations: [ChartBoxes1Component]
})
export class ChartBoxes1Module { }
