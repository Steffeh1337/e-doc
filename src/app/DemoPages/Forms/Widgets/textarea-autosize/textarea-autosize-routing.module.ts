import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextareaAutosizeComponent } from './textarea-autosize.component';

const routes: Routes = [
  {
    path: '',
    component: TextareaAutosizeComponent,
    data: {
      title: 'TextareaAutosize'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextareaAutosizeRoutingModule { }
