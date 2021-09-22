import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoughnutChartComponent } from './doughnut-chart.component';

const routes: Routes = [
  {
    path: '',
    component: DoughnutChartComponent,
    data: {
      title: 'Doughnut-Chart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoughnutChartRoutingModule { }
