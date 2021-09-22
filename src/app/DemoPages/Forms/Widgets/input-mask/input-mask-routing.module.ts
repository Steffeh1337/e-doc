import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputMaskComponent } from './input-mask.component';

const routes: Routes = [
  {
    path: '',
    component: InputMaskComponent,
    data: {
      title: 'InputMask'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputMaskRoutingModule { }
