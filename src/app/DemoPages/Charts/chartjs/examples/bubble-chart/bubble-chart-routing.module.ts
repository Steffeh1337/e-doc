import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BubbleChartComponent } from './bubble-chart.component';

const routes: Routes = [
  {
    path: '',
    component: BubbleChartComponent,
    data: {
      title: 'Bubble Chart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BubbleChartRoutingModule { }
