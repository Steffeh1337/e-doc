import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';

import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
	declarations: [
		PaymentsComponent
	],
	imports: [
		CommonModule,
		PaymentsRoutingModule,
		NgxLoadingModule.forRoot({}),
		NgbModule,
		NgxMatIntlTelInputModule,
		FontAwesomeModule
	]
})
export class PaymentsModule { }
