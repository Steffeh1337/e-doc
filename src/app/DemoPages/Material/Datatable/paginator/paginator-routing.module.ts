import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginatorComponent } from './paginator.component';

const routes: Routes = [
  {
    path: '',
    component: PaginatorComponent,
    data: {
      title: 'Paginator'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginatorRoutingModule { }
