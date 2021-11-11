import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginiComponent } from './pagini.component';

import { PaginiRoutingModule } from './pagini-routing.module';



@NgModule({
  declarations: [
    PaginiComponent
  ],
  imports: [
    CommonModule,
	PaginiRoutingModule
  ]
})
export class PaginiModule { }
