import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ScatterChartComponent } from './scatter-chart.component';
import { ScatterChartRoutingModule } from './scatter-chart-routing.module';

@NgModule({
  imports: [
    CommonModule, ChartsModule,
    ScatterChartRoutingModule,
  ],
  declarations: [ScatterChartComponent],
  exports: [ScatterChartComponent]

})
export class ScatterCharttModule { }
