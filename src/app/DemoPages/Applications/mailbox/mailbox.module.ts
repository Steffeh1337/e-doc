
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MailboxComponent } from './mailbox.component';
import { MailBoxRoutingModule } from './mailbox-routing.module';

@NgModule({
  imports: [
    CommonModule, FontAwesomeModule,
    MailBoxRoutingModule, NgbModule,
  ],
  declarations: [MailboxComponent]
})
export class MailBoxModule { }
