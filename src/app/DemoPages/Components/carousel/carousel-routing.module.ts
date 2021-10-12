import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel.component';

const routes: Routes = [
  {
    path: '',
    component: CarouselComponent,
    data: {
      title: 'Carousel'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarouselRoutingModule { }
