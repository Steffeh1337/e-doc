import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartBoxes3Component } from './chart-boxes3.component';

const routes: Routes = [
  {
    path: '',
    component: ChartBoxes3Component,
    data: {
      title: 'ChartBoxes3'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartBoxes3RoutingModule { }
