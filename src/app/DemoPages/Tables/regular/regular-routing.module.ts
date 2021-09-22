import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegularComponent } from './regular.component';

const routes: Routes = [
  {
    path: '',
    component: RegularComponent,
    data: {
      title: 'Regular'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegularRoutingModule { }
