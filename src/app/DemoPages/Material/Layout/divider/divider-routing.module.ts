import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DividerComponent } from './divider.component';

const routes: Routes = [
  {
    path: '',
    component: DividerComponent,
    data: {
      title: 'Divider'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DividerRoutingModule { }
