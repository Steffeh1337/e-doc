import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGroupsComponent } from './list-groups.component';

const routes: Routes = [
  {
    path: '',
    component: ListGroupsComponent,
    data: {
      title: 'ListGroups'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListGroupsRoutingModule { }
