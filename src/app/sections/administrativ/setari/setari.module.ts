import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from "angular-datatables";

import { ReactiveFormsModule } from '@angular/forms';

import { SetariComponent } from './setari.component';

import { SetariRoutingModule } from './setari-routing.module';

import { EditorModule } from '@tinymce/tinymce-angular';

import { ActiuniPermisiuniComponent } from './actiuni-permisiuni/actiuni-permisiuni.component';
import { CronuriComponent } from './cronuri/cronuri.component';
import { PermisiuniComponent } from './permisiuni/permisiuni.component';


@NgModule({
  declarations: [
    SetariComponent,
	ActiuniPermisiuniComponent,
	CronuriComponent,
	PermisiuniComponent
  ],
  imports: [
    CommonModule,
	SetariRoutingModule,
	DataTablesModule,
	ReactiveFormsModule,
	EditorModule
  ]
})
export class SetariModule { }
