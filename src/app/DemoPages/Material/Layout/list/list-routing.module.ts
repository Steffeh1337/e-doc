import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMatComponent } from './list.component';

const routes: Routes = [
  {
    path: '',
    component: ListMatComponent,
    data: {
      title: 'ListMat'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMatRoutingModule { }
