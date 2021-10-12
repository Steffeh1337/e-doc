import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderToggleComponent } from './slider-toggle.component';

const routes: Routes = [
  {
    path: '',
    component: SliderToggleComponent,
    data: {
      title: 'SliderToggle'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SliderToggleRoutingModule { }
