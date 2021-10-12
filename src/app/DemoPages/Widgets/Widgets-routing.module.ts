import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Widgets',
      status: false
    },
    children: [
      // Buttons & Indicators
      {
        path: 'chart-boxes-1',
        loadChildren: () => import('./chart-boxes1/chart-boxes1.module').then(m => m.ChartBoxes1Module)
      },
      {
        path: 'chart-boxes-2',
        loadChildren: () => import('./chart-boxes2/chart-boxes2.module').then(m => m.ChartBoxes2Module)
      },
      {
        path: 'chart-boxes-3',
        loadChildren: () => import('./chart-boxes3/chart-boxes3.module').then(m => m.ChartBoxes3Module)
      },
      {
        path: 'profile-boxes',
        loadChildren: () => import('./profile-boxes/profile-boxes.module').then(m => m.ProfileBoxesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }
