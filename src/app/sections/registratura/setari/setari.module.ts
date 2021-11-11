import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetariRoutingModule } from './setari-routing.module';
import { SetariComponent } from './setari.component';

import { DepartamenteComponent } from './departamente/departamente.component';
import { TipSolicitareComponent } from './tip-solicitare/tip-solicitare.component';
import { StatusSolicitareComponent } from './status-solicitare/status-solicitare.component';
import { PrioritateSolicitareComponent } from './prioritate-solicitare/prioritate-solicitare.component';
import { SabloaneComponent } from './sabloane/sabloane.component';


@NgModule({
  declarations: [
    SetariComponent,
    DepartamenteComponent,
    TipSolicitareComponent,
    StatusSolicitareComponent,
    PrioritateSolicitareComponent,
    SabloaneComponent
  ],
  imports: [
    CommonModule,
	SetariRoutingModule
  ]
})
export class SetariModule { }
