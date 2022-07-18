import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-module-routing.module';

@NgModule({
	declarations: [
	],
	imports: [
		CommonModule,
		AuthRoutingModule,
		HttpClientModule
	]
})
export class AuthModuleModule { }


// url : https://medium.com/@nixonaugustine5/localstorage-and-sessionstorage-in-angular-app-65cda19283a0