import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RangeSliderComponent } from './range-slider.component';

const routes: Routes = [
  {
    path: '',
    component: RangeSliderComponent,
    data: {
      title: 'RangeSlider'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RangeSliderRoutingModule { }
