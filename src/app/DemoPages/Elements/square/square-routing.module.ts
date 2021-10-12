import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SquareComponent } from './square.component';

const routes: Routes = [
  {
    path: '',
    component: SquareComponent,
    data: {
      title: 'Square'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SquareRoutingModule { }
