import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorpickerComponent } from './colorpicker.component';
import { ColorpickerRoutingModule } from './colorpicker-routing.module';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, ColorPickerModule,
    ColorpickerRoutingModule, PageTitleModule
  ],
  declarations: [ColorpickerComponent]
})
export class ColorpickerModule { }
