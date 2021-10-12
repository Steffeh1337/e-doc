import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesMainComponent } from './tables-main.component';

const routes: Routes = [
  {
    path: '',
    component: TablesMainComponent,
    data: {
      title: 'TablesMain'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesMainRoutingModule { }
