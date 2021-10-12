import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarComponent } from './progress-bar.component';

const routes: Routes = [
  {
    path: '',
    component: ProgressBarComponent,
    data: {
      title: 'ProgressBar'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressBarRoutingModule { }
