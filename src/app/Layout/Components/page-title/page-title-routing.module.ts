import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTitleComponent } from './page-title.component';

const routes: Routes = [
  {
    path: '',
    component: PageTitleComponent,
    data: {
      title: 'PageTitle'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageTitleRoutingModule { }
