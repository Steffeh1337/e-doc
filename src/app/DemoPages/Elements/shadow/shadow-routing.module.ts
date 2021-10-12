import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShadowComponent } from './shadow.component';

const routes: Routes = [
  {
    path: '',
    component: ShadowComponent,
    data: {
      title: 'Shadow'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShadowRoutingModule { }
