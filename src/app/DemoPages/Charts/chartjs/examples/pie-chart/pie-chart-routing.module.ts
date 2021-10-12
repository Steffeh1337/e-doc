import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieChartComponent } from './pie-chart.component';

const routes: Routes = [
  {
    path: '',
    component: PieChartComponent,
    data: {
      title: 'Pie-Chart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PieChartRoutingModule { }
