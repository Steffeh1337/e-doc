import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimepickerComponent } from './timepicker.component';

const routes: Routes = [
  {
    path: '',
    component: TimepickerComponent,
    data: {
      title: 'Timepicker'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimepickerRoutingModule { }
