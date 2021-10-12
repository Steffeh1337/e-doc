import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicChartComponent } from './dynamic-chart.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicChartComponent,
    data: {
      title: 'Dynamic-Chart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicChartRoutingModule { }
