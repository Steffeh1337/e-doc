import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileBoxesComponent } from './profile-boxes.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileBoxesComponent,
    data: {
      title: 'ProfileBoxes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileBoxesRoutingModule { }
