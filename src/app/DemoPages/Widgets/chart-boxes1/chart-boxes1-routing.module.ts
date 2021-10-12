import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartBoxes1Component } from './chart-boxes1.component';

const routes: Routes = [
  {
    path: '',
    component: ChartBoxes1Component,
    data: {
      title: 'ChartBoxes1'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartBoxes1RoutingModule { }
