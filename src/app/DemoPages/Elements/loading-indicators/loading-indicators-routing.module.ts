import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingIndicatorsComponent } from './loading-indicators.component';

const routes: Routes = [
  {
    path: '',
    component: LoadingIndicatorsComponent,
    data: {
      title: 'LoadingIndicators'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingIndicatorsRoutingModule { }
