import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountUpComponent } from './count-up.component';

const routes: Routes = [
  {
    path: '',
    component: CountUpComponent,
    data: {
      title: 'CountUp'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountUpRoutingModule { }
