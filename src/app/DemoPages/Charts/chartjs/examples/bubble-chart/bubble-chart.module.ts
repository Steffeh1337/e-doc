import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { BubbleChartComponent } from './bubble-chart.component';
import { BubbleChartRoutingModule } from './bubble-chart-routing.module';

@NgModule({
  imports: [
    CommonModule, ChartsModule,
    BubbleChartRoutingModule,
  ],
  declarations: [BubbleChartComponent],
  exports: [BubbleChartComponent]

})
export class BubbleChartModule { }
