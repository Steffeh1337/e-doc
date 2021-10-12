import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChipsComponent } from './chips.component';

const routes: Routes = [
  {
    path: '',
    component: ChipsComponent,
    data: {
      title: 'Chips'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChipsRoutingModule { }
