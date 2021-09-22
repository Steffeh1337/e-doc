import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartBoxes2Component } from './chart-boxes2.component';

const routes: Routes = [
  {
    path: '',
    component: ChartBoxes2Component,
    data: {
      title: 'ChartBoxes2'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartBoxes2RoutingModule { }
