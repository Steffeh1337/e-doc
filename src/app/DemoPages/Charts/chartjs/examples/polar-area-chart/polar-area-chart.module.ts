import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { PolarAreaChartComponent } from './polar-area-chart.component';
import { PolarAreaChartRoutingModule } from './polar-area-chart-routing.module';

@NgModule({
  imports: [
    CommonModule, ChartsModule,
    PolarAreaChartRoutingModule,
  ],
  declarations: [PolarAreaChartComponent],
  exports: [PolarAreaChartComponent]

})
export class PolarAreaChartModule { }
