import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from "angular-datatables";

import { ReactiveFormsModule } from '@angular/forms';

import { EditorModule } from '@tinymce/tinymce-angular';

import { SetariRoutingModule } from './setari-routing.module';
import { SetariComponent } from './setari.component';

import { DepartamenteComponent } from './departamente/departamente.component';
import { TipSolicitareComponent } from './tip-solicitare/tip-solicitare.component';
import { StatusSolicitareComponent } from './status-solicitare/status-solicitare.component';
import { PrioritateSolicitareComponent } from './prioritate-solicitare/prioritate-solicitare.component';
import { SabloaneSolicitareComponent } from './sabloane-solicitare/sabloane-solicitare.component';

import { EditComponent as DepartamenteEditComponent } from './departamente/partials/edit/edit.component';
import { AddComponent as DepartamenteAddComponent } from './departamente/partials/add/add.component';

import { EditComponent as SabloaneSolicitareEditComponent } from './sabloane-solicitare/partials/edit/edit.component';
import { AddComponent as SabloaneSolicitareAddComponent } from './sabloane-solicitare/partials/add/add.component';

import { EditComponent as StatusSolicitareEditComponent } from './status-solicitare/partials/edit/edit.component';
import { AddComponent as StatusSolicitareAddComponent } from './status-solicitare/partials/add/add.component';

import { EditComponent as TipSolicitareEditComponent } from './tip-solicitare/partials/edit/edit.component';
import { AddComponent as TipSolicitareAddComponent } from './tip-solicitare/partials/add/add.component';

import { EditComponent as PrioritateSolicitareEditComponent } from './prioritate-solicitare/partials/edit/edit.component';
import { AddComponent as PrioritateSolicitareAddComponent } from './prioritate-solicitare/partials/add/add.component';


@NgModule({
	declarations: [
		SetariComponent,
		TipSolicitareComponent,
		StatusSolicitareComponent,
		PrioritateSolicitareComponent,
		SabloaneSolicitareComponent,
		DepartamenteComponent,

		TipSolicitareEditComponent,
		TipSolicitareAddComponent,

		StatusSolicitareEditComponent,
		StatusSolicitareAddComponent,

		PrioritateSolicitareEditComponent,
		PrioritateSolicitareAddComponent,

		SabloaneSolicitareEditComponent,
		SabloaneSolicitareAddComponent,

		DepartamenteEditComponent,
		DepartamenteAddComponent
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
