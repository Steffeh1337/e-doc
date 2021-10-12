import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailboxComponent } from './mailbox.component';

const routes: Routes = [
  {
    path: '',
    component: MailboxComponent,
    data: {
      title: 'Mail-Box'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailBoxRoutingModule { }
