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
	selector: 'app-imputernicit-form',
	templateUrl: './imputernicit-form.component.html',
	styleUrls: ['./imputernicit-form.component.sass']
})
export class ImputernicitFormComponent implements OnInit {
	@Input() judete: any = []
	@Input() sectoare: any = []

	@Input() values

	matcher = new MyErrorStateMatcher();

	simpleInput: any = {
		nume: '',
		prenume: '',
		email: '',
		telefon: '',
		cnp: '',
		ci_serie: '',
		ci_numar: '',
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

		this.addNewRow()
	}

	addNewRow() {
		console.log('adding a new row')
		this.values.informatii.imputerniciti.push(this.simpleInput)
	}

	removeRow(index) {
		console.log('remove row', index)
		this.values.informatii.imputerniciti.splice(index, 1)
		if (this.values.informatii.imputerniciti.length == 0)
			this.addNewRow()
	}

}
