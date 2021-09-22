import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScatterChartComponent } from './scatter-chart.component';

const routes: Routes = [
  {
    path: '',
    component: ScatterChartComponent,
    data: {
      title: 'Scatter-Chart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScatterChartRoutingModule { }
