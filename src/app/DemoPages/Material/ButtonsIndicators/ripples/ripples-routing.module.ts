import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RipplesComponent } from './ripples.component';

const routes: Routes = [
  {
    path: '',
    component: RipplesComponent,
    data: {
      title: 'Ripples'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RipplesRoutingModule { }
