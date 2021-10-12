import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressSpinnerComponent } from './progress-spinner.component';

const routes: Routes = [
  {
    path: '',
    component: ProgressSpinnerComponent,
    data: {
      title: 'ProgressSpinner'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressSpinnerRoutingModule { }
