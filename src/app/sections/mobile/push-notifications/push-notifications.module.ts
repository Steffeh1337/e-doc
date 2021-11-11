import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushNotificationsComponent } from './push-notifications.component';

import { PushNotificationsRoutingModule } from './push-notifications-routing.module';



@NgModule({
  declarations: [
    PushNotificationsComponent
  ],
  imports: [
    CommonModule,
	PushNotificationsRoutingModule
  ]
})
export class PushNotificationsModule { }
