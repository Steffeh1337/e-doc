import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitariComponent } from './solicitari.component';

import { SolicitariRoutingModule } from './solicitari-routing.module';



@NgModule({
  declarations: [
    SolicitariComponent
  ],
  imports: [
    CommonModule,
	SolicitariRoutingModule
  ]
})
export class SolicitariModule { }
