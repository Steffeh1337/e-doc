import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisiuniComponent } from './permisiuni.component';

import { PermisiuniRoutingModule } from './permisiuni-routing.module';


@NgModule({
  declarations: [
    PermisiuniComponent
  ],
  imports: [
    CommonModule,
	PermisiuniRoutingModule
  ]
})
export class PermisiuniModule { }
