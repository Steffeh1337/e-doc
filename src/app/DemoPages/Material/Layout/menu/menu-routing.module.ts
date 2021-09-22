import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuMatComponent } from './menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuMatComponent,
    data: {
      title: 'MenuMat'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuMatRoutingModule { }
