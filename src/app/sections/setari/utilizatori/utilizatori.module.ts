import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilizatoriComponent } from './utilizatori.component';

import { UtilizatoriRoutingModule } from './utilizatori-routing.module';


@NgModule({
  declarations: [
    UtilizatoriComponent
  ],
  imports: [
    CommonModule,
	UtilizatoriRoutingModule
  ]
})
export class UtilizatoriModule { }
