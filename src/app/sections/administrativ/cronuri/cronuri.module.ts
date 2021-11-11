import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronuriComponent } from './cronuri.component';

import { CronuriRoutingModule } from './cronuri-routing.module';



@NgModule({
  declarations: [
    CronuriComponent
  ],
  imports: [
    CommonModule,
	CronuriRoutingModule
  ]
})
export class CronuriModule { }
