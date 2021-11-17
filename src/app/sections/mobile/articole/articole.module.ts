import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from "angular-datatables";
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

import { ArticoleRoutingModule } from './articole-routing.module';

import { ArticoleComponent } from './articole.component';

import { AddComponent } from './partials/add/add.component';
import { EditComponent } from './partials/edit/edit.component';


@NgModule({
  declarations: [
    ArticoleComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
	ArticoleRoutingModule,
	DataTablesModule,
	ReactiveFormsModule,
	EditorModule
  ]
})
export class ArticoleModule { }
