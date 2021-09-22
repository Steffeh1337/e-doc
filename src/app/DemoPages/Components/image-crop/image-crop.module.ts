import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCropComponent } from './image-crop.component';
import { ImageCropRoutingModule } from './image-crop-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, ImageCropperModule,
    ImageCropRoutingModule, PageTitleModule,
  ],
  declarations: [ImageCropComponent]
})
export class ImageCropModule { }
