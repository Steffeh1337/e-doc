import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollableComponent } from './scrollable.component';

const routes: Routes = [
  {
    path: '',
    component: ScrollableComponent,
    data: {
      title: 'Scrollable'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollableRoutingModule { }
