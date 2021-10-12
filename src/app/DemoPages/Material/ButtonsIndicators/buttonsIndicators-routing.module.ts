import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Material ButtonsIndicators',
      status: false
    },
    children: [
      // Buttons & Indicators
      {
        path: 'progress-bar',
        loadChildren: () => import('./mat-progress-bar/mat-progress-bar.module').then(m => m.MatProgressBarModules)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./mat-buttons/mat-buttons.module').then(m => m.MatButtonsModule)
      },
      {
        path: 'button-toggle',
        loadChildren: () => import('./button-toggle/button-toggle.module').then(m => m.ButtonToggleModule)
      },
      {
        path: 'chips',
        loadChildren: () => import('./chips/chips.module').then(m => m.ChipsModule)
      },
      {
        path: 'progress-spinner',
        loadChildren: () => import('./progress-spinner/progress-spinner.module').then(m => m.ProgressSpinnerModule)
      },
      {
        path: 'ripples',
        loadChildren: () => import('./ripples/ripples.module').then(m => m.RipplesModule)
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialButoonIndicatorsRoutingModule { }
