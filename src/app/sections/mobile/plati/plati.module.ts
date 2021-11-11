import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatiComponent } from './plati.component';

import { PlatiRoutingModule } from './plati-routing.module';



@NgModule({
  declarations: [
    PlatiComponent
  ],
  imports: [
    CommonModule,
	PlatiRoutingModule
  ]
})
export class PlatiModule { }
