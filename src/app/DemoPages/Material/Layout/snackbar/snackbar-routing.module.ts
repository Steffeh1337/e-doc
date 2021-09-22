import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnackbarComponent } from './snackbar.component';

const routes: Routes = [
  {
    path: '',
    component: SnackbarComponent,
    data: {
      title: 'Snackbar'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnackbarRoutingModule { }
