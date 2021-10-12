import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckCodeRoutingModule } from './check-code-routing.module'
// import { CheckCodeComponent } from './check-code.component'

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		CheckCodeRoutingModule,
		MatInputModule,
		MatIconModule,
		MatCheckboxModule,
		MatFormFieldModule,
		NgxLoadingModule.forRoot({}),
		NgbModule,
		// CheckCodeComponent
	]
})
export class CheckCodeModule { }
