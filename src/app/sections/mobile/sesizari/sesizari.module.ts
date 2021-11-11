import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SesizariComponent } from './sesizari.component';

import { SesizariRoutingModule } from './sesizari-routing.module';



@NgModule({
  declarations: [
    SesizariComponent
  ],
  imports: [
    CommonModule,
	SesizariRoutingModule
  ]
})
export class SesizariModule { }
