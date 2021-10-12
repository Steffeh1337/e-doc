import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputSelectsComponent } from './input-selects.component';

const routes: Routes = [
  {
    path: '',
    component: InputSelectsComponent,
    data: {
      title: 'InputSelects'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputSelectsRoutingModule { }
