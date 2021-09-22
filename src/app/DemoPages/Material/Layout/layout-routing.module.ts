import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Material Layout',
      status: false
    },
    children: [
      {
        path: 'snackbar',
        loadChildren: () => import('./snackbar/snackbar.module').then(m => m.SnackbarModule)
      },
      {
        path: 'tooltip',
        loadChildren: () => import('./tooltip/tooltip.module').then(m => m.TooltipModule)
      },
      {
        path: 'cards',
        loadChildren: () => import('./card/card.module').then(m => m.CardMatModule)
      },
      {
        path: 'divider',
        loadChildren: () => import('./divider/divider.module').then(m => m.DividerModule)
      },
      {
        path: 'expansion-panel',
        loadChildren: () => import('./expansion-panel/expansion-panel.module').then(m => m.ExpansionPanelModule)
      },
      {
        path: 'grid-list',
        loadChildren: () => import('./grid-list/grid-list.module').then(m => m.GridListModule)
      },
      {
        path: 'list',
        loadChildren: () => import('./list/list.module').then(m => m.ListMatModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('./list/list.module').then(m => m.ListMatModule)
      },
      {
        path: 'stepper',
        loadChildren: () => import('./stepper/stepper.module').then(m => m.StepperModule)
      },
      {
        path: 'tree',
        loadChildren: () => import('./tree/tree.module').then(m => m.TreeModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('./mat-tabs/mat-tabs.module').then(m => m.MatTabsModules)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialLayoutRoutingModule { }
