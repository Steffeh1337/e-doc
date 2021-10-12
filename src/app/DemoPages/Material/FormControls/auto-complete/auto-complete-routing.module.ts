import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete.component';

const routes: Routes = [
  {
    path: '',
    component: AutoCompleteComponent,
    data: {
      title: 'AutoComplete'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoCompleteRoutingModule { }
