import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialTabsComponent } from './material-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialTabsComponent,
    data: {
      title: 'Material-Tab'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialTabsRoutingModule { }
