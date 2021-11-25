import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectiuniComponent } from './sectiuni.component';

import { SectiuniRoutingModule } from './sectiuni-routing.module';

import { AddComponent } from './partials/add/add.component';
import { EditComponent } from './partials/edit/edit.component';

import { DataTablesModule } from "angular-datatables";
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent as FaqListComponent } from './partials/faq/list/list.component';
import { AddComponent as FaqAddComponent } from './partials/faq/add/add.component';
import { EditComponent as FaqEditComponent } from './partials/faq/edit/edit.component';


@NgModule({
  declarations: [
    SectiuniComponent,
    AddComponent,
    EditComponent,

    FaqListComponent,
	FaqAddComponent,
	FaqEditComponent
  ],
  imports: [
    CommonModule,
	SectiuniRoutingModule,
	DataTablesModule,
	ReactiveFormsModule
  ]
})
export class SectiuniModule { }
