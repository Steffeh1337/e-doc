import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart.component';
import { BarChartRoutingModule } from './bar-chart-routing.module';

@NgModule({
  imports: [
    CommonModule, ChartsModule,
    BarChartRoutingModule,
  ],
  declarations: [BarChartComponent],
  exports: [BarChartComponent]

})
export class BarChartModule { }
