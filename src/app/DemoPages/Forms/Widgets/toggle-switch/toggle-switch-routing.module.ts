import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToggleSwitchComponent } from './toggle-switch.component';

const routes: Routes = [
  {
    path: '',
    component: ToggleSwitchComponent,
    data: {
      title: 'ToggleSwitch'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToggleSwitchRoutingModule { }
