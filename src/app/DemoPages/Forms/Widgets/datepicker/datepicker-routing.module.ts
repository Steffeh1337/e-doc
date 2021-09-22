import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerComponent } from './datepicker.component';

const routes: Routes = [
  {
    path: '',
    component: DatepickerComponent,
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
