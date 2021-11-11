import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoguriComponent } from './loguri.component';

import { LoguriRoutingModule } from './loguri-routing.module';



@NgModule({
  declarations: [
    LoguriComponent
  ],
  imports: [
    CommonModule,
	LoguriRoutingModule
  ]
})
export class LoguriModule { }
