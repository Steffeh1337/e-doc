import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorModule } from '@tinymce/tinymce-angular';

import { LoguriComponent } from './loguri.component';

import { LoguriRoutingModule } from './loguri-routing.module';

import { DataTablesModule } from "angular-datatables";
import { ReactiveFormsModule } from '@angular/forms';
import { PayloadComponent } from './partials/payload/payload.component';


@NgModule({
  declarations: [
    LoguriComponent,
    PayloadComponent
  ],
  imports: [
    CommonModule,
	LoguriRoutingModule,
	DataTablesModule,
	ReactiveFormsModule,
	EditorModule
  ]
})
export class LoguriModule { }
