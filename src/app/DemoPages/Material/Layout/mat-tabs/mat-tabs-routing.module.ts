import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsComponent } from './mat-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: MatTabsComponent,
    data: {
      title: 'MatTabs'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatTabsRoutingModule { }
