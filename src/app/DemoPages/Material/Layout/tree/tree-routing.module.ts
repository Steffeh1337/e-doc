import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeComponent } from './tree.component';

const routes: Routes = [
  {
    path: '',
    component: TreeComponent,
    data: {
      title: 'Tree'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule { }
