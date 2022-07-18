import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AppointmentsComponent } from './appointments.component';

import { AppointmentsRoutingModule } from './appointments-routing.module';


@NgModule({
	declarations: [AppointmentsComponent],
	imports: [
		CommonModule,
		AppointmentsRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		DataTablesModule
	]
})
export class AppointmentsModule { }
