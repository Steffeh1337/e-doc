import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarChartComponent } from './radar-chart.component';

const routes: Routes = [
  {
    path: '',
    component: RadarChartComponent,
    data: {
      title: 'Radar-Chart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadarChartRoutingModule { }
