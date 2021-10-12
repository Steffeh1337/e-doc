import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component'
import { LoginPageRoutingModule } from './login-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		LoginPageRoutingModule,
		MatInputModule,
		MatIconModule,
		MatCheckboxModule,
		NgxLoadingModule.forRoot({}),
		NgbModule
	],
	declarations: [LoginComponent]
})
export class LoginModule { }
