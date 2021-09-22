import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressBarComponent } from './mat-progress-bar.component';

const routes: Routes = [
  {
    path: '',
    component: MatProgressBarComponent,
    data: {
      title: 'MatProgressBar'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatProgressBarRoutingModule { }
