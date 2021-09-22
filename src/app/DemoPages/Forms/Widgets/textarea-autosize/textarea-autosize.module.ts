import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { TextareaAutosizeComponent } from './textarea-autosize.component';
import { TextareaAutosizeRoutingModule } from './textarea-autosize-routing.module';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, TextareaAutosizeModule,
    TextareaAutosizeRoutingModule, PageTitleModule
  ],
  declarations: [TextareaAutosizeComponent]
})
export class TextareaAutosizeModules { }
