import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaugesComponent } from './gauges.component';

const routes: Routes = [
  {
    path: '',
    component: GaugesComponent,
    data: {
      title: 'Gauges'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaugesRoutingModule { }
