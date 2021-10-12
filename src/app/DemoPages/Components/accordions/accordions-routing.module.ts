import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionsComponent } from './accordions.component';

const routes: Routes = [
  {
    path: '',
    component: AccordionsComponent,
    data: {
      title: 'Accordions'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccordionsRoutingModule { }
