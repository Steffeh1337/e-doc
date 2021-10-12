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
	selector: 'app-tip-scutire',
	templateUrl: './tip-scutire.component.html',
	styleUrls: ['./tip-scutire.component.sass']
})
export class TipScutireComponent implements OnInit {

	@Input() tipSolicitant: number = 0
	@Input() tipPersoana: string = 'persoanaFizica'
	@Input() judete: any = []
	@Input() sectoare: any = []
	@Input() tip_scutire : any = 1

	@Input() values

	matcher = new MyErrorStateMatcher();

	loadForm = 0

	constructor() { }

	ngOnInit(): void {
		this.loadForm = 1
	}

}
