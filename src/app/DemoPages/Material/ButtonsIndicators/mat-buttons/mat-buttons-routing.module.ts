import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonsComponent } from './mat-buttons.component';

const routes: Routes = [
  {
    path: '',
    component: MatButtonsComponent,
    data: {
      title: 'MatButtons'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatButtonsRoutingModule { }
