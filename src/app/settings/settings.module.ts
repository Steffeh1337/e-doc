import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from "angular-datatables";

import { EditorModule } from '@tinymce/tinymce-angular';

import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';

import { UserListComponent } from '../components/user/user-list/user-list.component';
import { MobileSectionListComponent } from '../components/mobile/mobile-section-list/mobile-section-list.component';
import { MobileSectionContentComponent } from '../components/mobile/mobile-section-content/mobile-section-content.component';
import { ArticleListComponent } from '../components/article/article-list/article-list.component';
import { SesizarePriorityListComponent } from '../components/sesizare/sesizare-priority-list/sesizare-priority-list.component';
import { SesizareSabloaneListComponent } from '../components/sesizare/sesizare-sabloane-list/sesizare-sabloane-list.component';
import { SesizareStatusListComponent } from '../components/sesizare/sesizare-status-list/sesizare-status-list.component';
import { SesizareTypeListComponent } from '../components/sesizare/sesizare-type-list/sesizare-type-list.component';
import { UserPermissionsComponent } from '../components/user/user-permissions/user-permissions.component';
import { UserRolesComponent } from '../components/user/user-roles/user-roles.component';
import { PermissionActionsComponent } from '../components/permissions/permission-actions/permission-actions.component';
import { DepartmentListComponent } from '../components/department/department-list/department-list.component';
import { CronJobListComponent } from '../components/cron-job/cron-job-list/cron-job-list.component';
import { DirectiiListComponent } from '../components/directii/directii-list/directii-list.component';
import { LogsListComponent } from '../components/logs/logs-list/logs-list.component';
import { ReactiveFormsModule } from '@angular/forms';


import { MobileSectionEditComponent } from '../components/mobile/mobile-section-list/partials/mobile-section-edit/mobile-section-edit.component';
import { MobileSectionAddComponent } from '../components/mobile/mobile-section-list/partials/mobile-section-add/mobile-section-add.component';

import { MobileSectionContentEditComponent } from '../components/mobile/mobile-section-content/partials/mobile-section-content-edit/mobile-section-content-edit.component';
import { MobileSectionContentAddComponent } from '../components/mobile/mobile-section-content/partials/mobile-section-content-add/mobile-section-content-add.component';

import { SesizarePriorityListEditComponent } from '../components/sesizare/sesizare-priority-list/partials/sesizare-priority-list-edit/sesizare-priority-list-edit.component';
import { SesizarePriorityListAddComponent } from '../components/sesizare/sesizare-priority-list/partials/sesizare-priority-list-add/sesizare-priority-list-add.component';

import { SesizareSabloaneListAddComponent } from '../components/sesizare/sesizare-sabloane-list/partials/sesizare-sabloane-list-add/sesizare-sabloane-list-add.component';
import { SesizareSabloaneListEditComponent } from '../components/sesizare/sesizare-sabloane-list/partials/sesizare-sabloane-list-edit/sesizare-sabloane-list-edit.component';

import { SesizareStatusListAddComponent } from '../components/sesizare/sesizare-status-list/partials/sesizare-status-list-add/sesizare-status-list-add.component';
import { SesizareStatusListEditComponent } from '../components/sesizare/sesizare-status-list/partials/sesizare-status-list-edit/sesizare-status-list-edit.component';

import { SesizareTypeListAddComponent } from '../components/sesizare/sesizare-type-list/partials/sesizare-type-list-add/sesizare-type-list-add.component';
import { SesizareTypeListEditComponent } from '../components/sesizare/sesizare-type-list/partials/sesizare-type-list-edit/sesizare-type-list-edit.component';

@NgModule({
  declarations: [
    SettingsComponent,
	UserListComponent,
	MobileSectionListComponent,
	MobileSectionContentComponent,
	ArticleListComponent,
	SesizarePriorityListComponent,
	SesizareSabloaneListComponent,
	SesizareStatusListComponent,
	SesizareTypeListComponent,
	UserPermissionsComponent,
	UserRolesComponent,
	PermissionActionsComponent,
	DepartmentListComponent,
	CronJobListComponent,
	DirectiiListComponent,
	LogsListComponent,

	MobileSectionEditComponent,
	MobileSectionAddComponent,

	MobileSectionContentEditComponent,
	MobileSectionContentAddComponent,

	SesizarePriorityListEditComponent,
	SesizarePriorityListAddComponent,

	SesizareSabloaneListEditComponent,
	SesizareSabloaneListAddComponent,

	SesizareStatusListEditComponent,
	SesizareStatusListAddComponent,

	SesizareTypeListEditComponent,
	SesizareTypeListAddComponent
  ],
  imports: [
    CommonModule,
	SettingsRoutingModule,
	DataTablesModule,
	ReactiveFormsModule,
	EditorModule
  ]
})
export class SettingsModule { }
