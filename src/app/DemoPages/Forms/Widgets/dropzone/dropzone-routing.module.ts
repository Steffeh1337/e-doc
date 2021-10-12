import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropzoneComponent } from './dropzone.component';

const routes: Routes = [
  {
    path: '',
    component: DropzoneComponent,
    data: {
      title: 'Dropzone'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropzoneRoutingModule { }
