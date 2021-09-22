import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { RadarChartComponent } from './radar-chart.component';
import { RadarChartRoutingModule } from './radar-chart-routing.module';

@NgModule({
  imports: [
    CommonModule, ChartsModule,
    RadarChartRoutingModule,
  ],
  declarations: [RadarChartComponent],
  exports: [RadarChartComponent]

})
export class RadarChartModule { }
