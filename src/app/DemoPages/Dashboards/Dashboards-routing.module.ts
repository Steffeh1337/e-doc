import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboards',
      status: false
    },
    children: [
      {
        path: 'analytics',
        loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule)
      },
      {
        path: 'advertisement',
        loadChildren: () => import('./advertisement/advertisement.module').then(m => m.AdvertisementModule)
      },
      {
        path: 'management',
        loadChildren: () => import('./management/management.module').then(m => m.ManagementModule)
      },
      {
        path: 'helpdesk',
        loadChildren: () => import('./helpdesk/helpdesk.module').then(m => m.HelpdeskModule)
      },
      {
        path: 'monitoring',
        loadChildren: () => import('./monitoring/monitoring.module').then(m => m.MonitoringModule)
      },
      {
        path: 'crypto',
        loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule)
      },
      {
        path: 'project-management',
        loadChildren: () => import('./project-management/project-management.module').then(m => m.ProjectManagementModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'statistics',
        loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
