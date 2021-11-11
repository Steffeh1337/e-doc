import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalerieComponent } from './galerie.component';

import { GalerieRoutingModule } from './galerie-routing.module';



@NgModule({
  declarations: [
    GalerieComponent
  ],
  imports: [
    CommonModule,
	GalerieRoutingModule
  ]
})
export class GalerieModule { }
