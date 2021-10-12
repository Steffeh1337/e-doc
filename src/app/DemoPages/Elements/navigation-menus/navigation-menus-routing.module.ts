import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationMenusComponent } from './navigation-menus.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationMenusComponent,
    data: {
      title: 'NavigationMenus'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationMenusRoutingModule { }
