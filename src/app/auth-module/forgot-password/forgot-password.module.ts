import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ForgotPasswordComponent } from './forgot-password.component'

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ForgotPasswordPageRoutingModule,
		MatInputModule,
		MatIconModule,
		MatCheckboxModule,
		NgxLoadingModule.forRoot({}),
		NgbModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatRadioModule,
		MatCardModule,
		MatStepperModule,
		MatIconModule,
	],
	declarations: [ForgotPasswordComponent]
})
export class ForgotPasswordModule { }
