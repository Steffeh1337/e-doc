import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonIconsComponent } from './icon.component';

const routes: Routes = [
  {
    path: '',
    component: ButtonIconsComponent,
    data: {
      title: 'ButtonIcons'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonIconsRoutingModule { }
