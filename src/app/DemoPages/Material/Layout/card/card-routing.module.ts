import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardMatComponent } from './card.component';

const routes: Routes = [
  {
    path: '',
    component: CardMatComponent,
    data: {
      title: 'CardMat'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardMatRoutingModule { }
