import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart.component';
import { DoughnutChartRoutingModule } from './doughnut-chart-routing.module';

@NgModule({
  imports: [
    CommonModule, ChartsModule,
    DoughnutChartRoutingModule,
  ],
  declarations: [DoughnutChartComponent],
  exports: [DoughnutChartComponent]

})
export class DoughnutChartModule { }
