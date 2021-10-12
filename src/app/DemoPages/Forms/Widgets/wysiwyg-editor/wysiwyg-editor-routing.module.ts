import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WysiwygEditorComponent } from './wysiwyg-editor.component';

const routes: Routes = [
  {
    path: '',
    component: WysiwygEditorComponent,
    data: {
      title: 'WysiwygEditor'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WysiwygEditorRoutingModule { }
