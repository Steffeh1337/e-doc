import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Form Element',
      status: false
    },
    children: [
      {
        path: 'controls',
        loadChildren: () => import('./controls/controls.module').then(m => m.ControlsModule)
      },
      {
        path: 'layouts',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
      },
      {
        path: 'validation',
        loadChildren: () => import('./validation/validation.module').then(m => m.ValidationModule)
      },
      {
        path: 'sticky-headers',
        loadChildren: () => import('./sticky-headers/sticky-headers.module').then(m => m.StickyHeadersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormElementRoutingModule { }
