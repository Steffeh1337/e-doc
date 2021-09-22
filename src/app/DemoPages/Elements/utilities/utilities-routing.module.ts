import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesComponent } from './utilities.component';

const routes: Routes = [
  {
    path: '',
    component: UtilitiesComponent,
    data: {
      title: 'Utilities'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
