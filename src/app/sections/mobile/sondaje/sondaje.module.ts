import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SondajeComponent } from './sondaje.component';

import { SondajeRoutingModule } from './sondaje-routing.module';


@NgModule({
  declarations: [
    SondajeComponent
  ],
  imports: [
    CommonModule,
	SondajeRoutingModule
  ]
})
export class SondajeModule { }
