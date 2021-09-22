import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StickyHeadersComponent } from './sticky-headers.component';

const routes: Routes = [
  {
    path: '',
    component: StickyHeadersComponent,
    data: {
      title: 'StickyHeaders'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StickyHeadersRoutingModule { }
