import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component'

import { RegisterPageRoutingModule } from './register-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatButtonModule } from '@angular/material/button';

import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RegisterPageRoutingModule,
		MatInputModule,
		MatIconModule,
		MatCheckboxModule,
		NgxLoadingModule.forRoot({}),
		NgbModule,
		NgxMatIntlTelInputModule,
		MatButtonModule,
		MatFormFieldModule,
		MatRadioModule,
		MatCardModule,
		MatStepperModule
	],
	declarations: [RegisterComponent]
})
export class RegisterModule { }
