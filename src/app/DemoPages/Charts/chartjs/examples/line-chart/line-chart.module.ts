import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart.component';
import { LineChartRoutingModule } from './line-chart-routing.module';

@NgModule({
  imports: [
    CommonModule, ChartsModule,
    LineChartRoutingModule,
  ],
  declarations: [LineChartComponent],
  exports: [LineChartComponent]

})
export class LineChartModule { }
