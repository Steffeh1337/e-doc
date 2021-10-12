import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolarAreaChartComponent } from './polar-area-chart.component';

const routes: Routes = [
  {
    path: '',
    component: PolarAreaChartComponent,
    data: {
      title: 'Polar-AreaChart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolarAreaChartRoutingModule { }
