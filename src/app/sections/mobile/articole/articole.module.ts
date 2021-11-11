import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticoleComponent } from './articole.component';

import { ArticoleRoutingModule } from './articole-routing.module';



@NgModule({
  declarations: [
    ArticoleComponent
  ],
  imports: [
    CommonModule,
	ArticoleRoutingModule
  ]
})
export class ArticoleModule { }
