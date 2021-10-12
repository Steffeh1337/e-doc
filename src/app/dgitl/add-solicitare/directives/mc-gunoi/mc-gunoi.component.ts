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
	selector: 'app-mc-gunoi',
	templateUrl: './mc-gunoi.component.html',
	styleUrls: ['./mc-gunoi.component.sass']
})
export class McGunoiComponent implements OnInit {

	@Input() tipPersoana: string

	matcher = new MyErrorStateMatcher();
	
	@Input() values
	
	gunoiAnual : any = {
		ian: 0,
		feb: 0,
		mar: 0,
		apr: 0,
		mai: 0,
		iun: 0,
		iul: 0,
		aug: 0,
		sep: 0,
		oct: 0,
		nov: 0,
		dec: 0
	}

	constructor() { }

	ngOnInit(): void {
	}

}
