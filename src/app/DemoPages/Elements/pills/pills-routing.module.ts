import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PillsComponent } from './pills.component';

const routes: Routes = [
  {
    path: '',
    component: PillsComponent,
    data: {
      title: 'Pills'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PillsRoutingModule { }
