import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownsComponent } from './dropdowns.component';

const routes: Routes = [
  {
    path: '',
    component: DropdownsComponent,
    data: {
      title: 'Dropdowns'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownsRoutingModule { }
