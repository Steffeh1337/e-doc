import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Charts',
      status: false
    },
    children: [
      {
        path: 'chartjs',
        loadChildren: () => import('./apexcharts/apexcharts.module').then(m => m.ApexchartsModule)
      },
      {
        path: 'apexcharts',
        loadChildren: () => import('./chartjs/chartjs.module').then(m => m.ChartjsModule)
      },
      {
        path: 'gauges',
        loadChildren: () => import('./gauges/gauges.module').then(m => m.GaugesModule)
      },
      {
        path: 'sparklines',
        loadChildren: () => import('./sparklines/sparklines.module').then(m => m.SparklinesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule {
}
