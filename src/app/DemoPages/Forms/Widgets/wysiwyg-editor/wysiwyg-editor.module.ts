import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { WysiwygEditorComponent } from './wysiwyg-editor.component';
import { WysiwygEditorRoutingModule } from './wysiwyg-editor-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, AngularEditorModule,
    WysiwygEditorRoutingModule, PageTitleModule
  ],
  declarations: [WysiwygEditorComponent]
})
export class WysiwygEditorModule { }
