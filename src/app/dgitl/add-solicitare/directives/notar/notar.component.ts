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
	selector: 'app-notar',
	templateUrl: './notar.component.html',
	styleUrls: ['./notar.component.sass']
})
export class NotarComponent implements OnInit {

	@Input() judete: any = []
	@Input() sectoare: any = []

	matcher = new MyErrorStateMatcher();

	@Input() values

	arrData: any = []
	simpleInput: any = {
		denumire: '',
		email: '',
		telefon: '',
		judet: '',
		oras: '',
		sector: '',
		strada: '',
		numar: '',
		bloc: '',
		scara: '',
		etaj: '',
		apartament: '',
		observatii: ''
	}

	constructor() { }

	ngOnInit(): void {
	}

}
