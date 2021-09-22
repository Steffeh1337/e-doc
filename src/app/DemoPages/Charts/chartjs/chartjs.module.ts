import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartjsComponent } from './chartjs.component';
import { ChartjsRoutingModule } from './chartjs-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';
import { BarChartModule } from './examples/bar-chart/bar-chart.module';
import { BubbleChartModule } from './examples/bubble-chart/bubble-chart.module';
import { DoughnutChartModule } from './examples/doughnut-chart/doughnut-chart.module';
import { DynamicChartModule } from './examples/dynamic-chart/dynamic-chart.module';
import { LineChartModule } from './examples/line-chart/line-chart.module';
import { PieChartModule } from './examples/pie-chart/pie-chart.module';
import { PolarAreaChartModule } from './examples/polar-area-chart/polar-area-chart.module';
import { RadarChartModule } from './examples/radar-chart/radar-chart.module';
import { ScatterCharttModule } from './examples/scatter-chart/scatter-chart.module';


@NgModule({
  imports: [
    CommonModule, NgApexchartsModule, NgbModule, ChartsModule,
    ChartjsRoutingModule, PageTitleModule,
    BarChartModule,
    BubbleChartModule,
    DoughnutChartModule,
    DynamicChartModule,
    LineChartModule,
    PieChartModule,
    PolarAreaChartModule,
    RadarChartModule,
    ScatterCharttModule,

  ],
  declarations: [ChartjsComponent]
})
export class ChartjsModule { }
