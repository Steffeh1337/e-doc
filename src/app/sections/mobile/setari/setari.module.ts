import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetariComponent } from './setari.component';
import { TipSesizareComponent } from './tip-sesizare/tip-sesizare.component';
import { StatusSesizareComponent } from './status-sesizare/status-sesizare.component';
import { PrioritateSesizareComponent } from './prioritate-sesizare/prioritate-sesizare.component';
import { SabloaneComponent } from './sabloane/sabloane.component';
import { InstitutiiComponent } from './institutii/institutii.component';
import { DepartamenteInstitutiiComponent } from './departamente-institutii/departamente-institutii.component';



@NgModule({
  declarations: [
    SetariComponent,
    TipSesizareComponent,
    StatusSesizareComponent,
    PrioritateSesizareComponent,
    SabloaneComponent,
    InstitutiiComponent,
    DepartamenteInstitutiiComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SetariModule { }
