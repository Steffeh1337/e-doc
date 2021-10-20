import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from "angular-datatables";

import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';

import { UserListComponent } from '../components/user-list/user-list.component';
import { MobileSectionListComponent } from '../components/mobile-section-list/mobile-section-list.component';
import { MobileSectionContentComponent } from '../components/mobile-section-content/mobile-section-content.component';
import { ArticleListComponent } from '../components/article-list/article-list.component';
import { SesizarePriorityListComponent } from '../components/sesizare-priority-list/sesizare-priority-list.component';
import { SesizareSabloaneListComponent } from '../components/sesizare-sabloane-list/sesizare-sabloane-list.component';
import { SesizareStatusListComponent } from '../components/sesizare-status-list/sesizare-status-list.component';
import { SesizareTypeListComponent } from '../components/sesizare-type-list/sesizare-type-list.component';
import { UserPermissionsComponent } from '../components/user-permissions/user-permissions.component';
import { UserRolesComponent } from '../components/user-roles/user-roles.component';
import { PermissionActionsComponent } from '../components/permission-actions/permission-actions.component';
import { DepartmentListComponent } from '../components/department-list/department-list.component';
import { CronJobListComponent } from '../components/cron-job-list/cron-job-list.component';
import { DirectiiListComponent } from '../components/directii-list/directii-list.component';
import { LogsListComponent } from '../components/logs-list/logs-list.component';

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
	LogsListComponent
  ],
  imports: [
    CommonModule,
	SettingsRoutingModule,
	DataTablesModule
  ]
})
export class SettingsModule { }
