import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerComponent2 } from './mat-datepicker.component';

const routes: Routes = [
  {
    path: '',
    component: DatepickerComponent2,
    data: {
      title: 'Datepicker'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatepickerRoutingModule { }
