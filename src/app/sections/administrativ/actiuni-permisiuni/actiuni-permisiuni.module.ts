import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiuniPermisiuniComponent } from './actiuni-permisiuni.component';

import { ActiuniPermisiuniRoutingModule } from './actiuni-permisiuni-routing.module';



@NgModule({
  declarations: [
    ActiuniPermisiuniComponent
  ],
  imports: [
    CommonModule,
	ActiuniPermisiuniRoutingModule
  ]
})
export class ActiuniPermisiuniModule { }
