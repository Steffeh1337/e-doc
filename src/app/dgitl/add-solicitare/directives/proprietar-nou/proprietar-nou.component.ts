import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { environment } from '../../../../../environments/environment'

import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}
@Component({
	selector: 'app-proprietar-nou',
	templateUrl: './proprietar-nou.component.html',
	styleUrls: ['./proprietar-nou.component.sass']
})
export class ProprietarNouComponent implements OnInit {

	@Input() judete: any = []
	@Input() sectoare: any = []

	@Input() values

	matcher = new MyErrorStateMatcher();

	constructor() { }

	ngOnInit(): void {
	}
}
