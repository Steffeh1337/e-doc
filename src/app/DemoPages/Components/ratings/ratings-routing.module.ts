import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingsComponent } from './ratings.component';

const routes: Routes = [
  {
    path: '',
    component: RatingsComponent,
    data: {
      title: 'Ratings'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingsRoutingModule { }
