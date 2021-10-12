import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridListComponent } from './grid-list.component';

const routes: Routes = [
  {
    path: '',
    component: GridListComponent,
    data: {
      title: 'GridList'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridListRoutingModule { }
