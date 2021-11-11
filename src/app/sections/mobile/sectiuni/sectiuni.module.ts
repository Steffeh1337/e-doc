import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectiuniComponent } from './sectiuni.component';

import { SectiuniRoutingModule } from './sectiuni-routing.module';


@NgModule({
  declarations: [
    SectiuniComponent
  ],
  imports: [
    CommonModule,
	SectiuniRoutingModule
  ]
})
export class SectiuniModule { }
