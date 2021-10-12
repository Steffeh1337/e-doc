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
      // Table
      {
        path: 'table',
        loadChildren: () => import('./Datatable/table/table.module').then(m => m.TableModule)
      },
      {
        path: 'paginator',
        loadChildren: () => import('./Datatable/paginator/paginator.module').then(m => m.PaginatorModule)
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
