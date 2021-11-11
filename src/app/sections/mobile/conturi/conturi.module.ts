import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConturiComponent } from './conturi.component';

import { ConturiRoutingModule } from './conturi-routing.module';



@NgModule({
  declarations: [
    ConturiComponent
  ],
  imports: [
    CommonModule,
	ConturiRoutingModule
  ]
})
export class ConturiModule { }
