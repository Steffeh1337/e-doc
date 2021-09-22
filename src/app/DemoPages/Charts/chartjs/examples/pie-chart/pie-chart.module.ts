import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart.component';
import { PieChartRoutingModule } from './pie-chart-routing.module';

@NgModule({
  imports: [
    CommonModule, ChartsModule,
    PieChartRoutingModule,
  ],
  declarations: [PieChartComponent],
  exports: [PieChartComponent]

})
export class PieChartModule { }
