import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CfGenerateComponent } from './cf-generate.component';

import { CfGenerateRoutingModule } from './cf-generate-routing.module'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxLoadingModule } from 'ngx-loading';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [
		CfGenerateComponent
	],
	imports: [
		CommonModule,
		CfGenerateRoutingModule,
		FontAwesomeModule,
		NgbModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatIconModule,
		MatCheckboxModule,
		MatFormFieldModule,
		NgxLoadingModule.forRoot({}),
		NgxMatIntlTelInputModule,
		MatSelectModule,
		// InfoSectionsModule,
		MatButtonModule
	]
})
export class CfGenerateModule { }
