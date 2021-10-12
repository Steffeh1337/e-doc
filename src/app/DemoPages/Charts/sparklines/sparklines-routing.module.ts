import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SparklinesComponent } from './sparklines.component';

const routes: Routes = [
  {
    path: '',
    component: SparklinesComponent,
    data: {
      title: 'Sparklines'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SparklinestRoutingModule { }
