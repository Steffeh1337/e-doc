import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { DynamicChartComponent } from './dynamic-chart.component';
import { DynamicChartRoutingModule } from './dynamic-chart-routing.module';

@NgModule({
  imports: [
    CommonModule, ChartsModule,
    DynamicChartRoutingModule,
  ],
  declarations: [DynamicChartComponent],
  exports: [DynamicChartComponent]

})
export class DynamicChartModule { }
