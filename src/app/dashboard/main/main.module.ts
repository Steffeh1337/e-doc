import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { MainPageRoutingModule } from './main-routing.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
	declarations: [
		MainComponent
	],
	imports: [
		CommonModule,
		MainPageRoutingModule,
		NgbModule,
		FontAwesomeModule
	]
})
export class MainModule { }