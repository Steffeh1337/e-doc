import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageCropComponent } from './image-crop.component';

const routes: Routes = [
  {
    path: '',
    component: ImageCropComponent,
    data: {
      title: 'ImageCrop'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageCropRoutingModule { }
