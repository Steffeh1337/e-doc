import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from "angular-datatables";

import { ReactiveFormsModule } from '@angular/forms';

import { SetariComponent } from './setari.component';

import { SetariRoutingModule } from './setari-routing.module';

import { TipSesizareComponent } from './tip-sesizare/tip-sesizare.component';
import { StatusSesizareComponent } from './status-sesizare/status-sesizare.component';
import { PrioritateSesizareComponent } from './prioritate-sesizare/prioritate-sesizare.component';
import { SabloaneComponent } from './sabloane/sabloane.component';
import { InstitutiiComponent } from './institutii/institutii.component';
import { DepartamenteInstitutiiComponent } from './departamente-institutii/departamente-institutii.component';

import { EditComponent as SesizareTypeEditComponent } from './tip-sesizare/partials/edit/edit.component';
import { AddComponent as SesizareAddEditComponent } from './tip-sesizare/partials/add/add.component';

import { EditComponent as SesizareStatusEditComponent } from './status-sesizare/partials/edit/edit.component';
import { AddComponent as SesizareStatusAddComponent } from './status-sesizare/partials/add/add.component';



@NgModule({
  declarations: [
    SetariComponent,
    TipSesizareComponent,
    StatusSesizareComponent,
    PrioritateSesizareComponent,
    SabloaneComponent,
    InstitutiiComponent,
    DepartamenteInstitutiiComponent,
    SesizareTypeEditComponent,
    SesizareAddEditComponent,
	SesizareStatusEditComponent,
	SesizareStatusAddComponent
  ],
  imports: [
    CommonModule,
	SetariRoutingModule,
	DataTablesModule,
	ReactiveFormsModule,
  ]
})
export class SetariModule { }
