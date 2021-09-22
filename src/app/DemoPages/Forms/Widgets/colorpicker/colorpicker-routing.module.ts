import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorpickerComponent } from './colorpicker.component';

const routes: Routes = [
  {
    path: '',
    component: ColorpickerComponent,
    data: {
      title: 'Colorpicker'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorpickerRoutingModule { }
