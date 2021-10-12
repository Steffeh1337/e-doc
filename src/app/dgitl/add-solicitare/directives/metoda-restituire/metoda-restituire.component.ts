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
	selector: 'app-metoda-restituire',
	templateUrl: './metoda-restituire.component.html',
	styleUrls: ['./metoda-restituire.component.sass']
})
export class MetodaRestituireComponent implements OnInit {

	@Input() metoda_restituirii: number = 2

	matcher = new MyErrorStateMatcher();

	@Input() values
	
	adresa_scutire: any = {
		strada: '',
		numar: '',
		bloc: '',
		scara: '',
		etaj: '',
		apartament: '',
		observatii: ''
	}

	banca: any = {
		iban: '',
		banca: '',
		sucursala: '',
		observatii:''
	}

	constructor() { }

	ngOnInit(): void {
	}

}
