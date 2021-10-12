import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSolicitareComponent } from './view-solicitare.component';
import { ViewSolicitarRoutingModule } from './view-solicitare-routing.module'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxLoadingModule } from 'ngx-loading';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { MatSelectModule } from '@angular/material/select';

import { MatButtonModule } from '@angular/material/button';


@NgModule({
	declarations: [
		ViewSolicitareComponent
	],
	imports: [
		CommonModule,
		ViewSolicitarRoutingModule,
		FontAwesomeModule,
		NgbModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatSelectModule,
		MatIconModule,
		MatCheckboxModule,
		MatFormFieldModule,
		NgxLoadingModule.forRoot({}),
		NgxMatIntlTelInputModule,
		MatButtonModule
	]
})
export class ViewSolicitareModule { }
