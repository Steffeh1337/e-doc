import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from "angular-datatables";

import { ReactiveFormsModule } from '@angular/forms';

import { EditorModule } from '@tinymce/tinymce-angular';

import { SetariComponent } from './setari.component';
import { SetariRoutingModule } from './setari-routing.module';

import { ActiuniPermisiuniComponent } from './actiuni-permisiuni/actiuni-permisiuni.component';
import { CronuriComponent } from './cronuri/cronuri.component';
import { PermisiuniComponent } from './permisiuni/permisiuni.component';

import { AddComponent as PermisiuniAddComponent } from './permisiuni/partials/add/add.component';
import { EditComponent as PermisiuniEditComponent } from './permisiuni/partials/edit/edit.component';

import { AddComponent as PermisiuniActiuniAddComponent } from './actiuni-permisiuni/partials/add/add.component';
import { EditComponent as PermisiuniActiuniEditComponent } from './actiuni-permisiuni/partials/edit/edit.component';

import { AddComponent as CronuriAddComponent } from './cronuri/partials/add/add.component';
import { EditComponent as CronuriEditComponent } from './cronuri/partials/edit/edit.component';


@NgModule({
	declarations: [
		SetariComponent,
		ActiuniPermisiuniComponent,
		CronuriComponent,
		PermisiuniComponent,

		PermisiuniAddComponent,
		PermisiuniEditComponent,

		PermisiuniActiuniAddComponent,
		PermisiuniActiuniEditComponent,

		CronuriAddComponent,
		CronuriEditComponent
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
