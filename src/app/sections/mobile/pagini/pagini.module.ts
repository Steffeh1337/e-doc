import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from "angular-datatables";
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

import { PaginiRoutingModule } from './pagini-routing.module';

import { PaginiComponent } from './pagini.component';

import { EditComponent } from './partials/edit/edit.component';
import { AddComponent } from './partials/add/add.component';


@NgModule({
  declarations: [
    PaginiComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
	PaginiRoutingModule,
	DataTablesModule,
	ReactiveFormsModule,
	EditorModule
  ]
})
export class PaginiModule { }
