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
	selector: 'app-bilete-form',
	templateUrl: './bilete-form.component.html',
	styleUrls: ['./bilete-form.component.sass']
})
export class BileteFormComponent implements OnInit {

	matcher = new MyErrorStateMatcher();

	@Input() values
	
	simpleInput: any = {
		id: 0,
		fel_document_bilete : '',
		numar_document_bilete: '',
		total_bilete: '',
		tarif_bilete: '',
		valoare_totala_bilete: '',
		serie_bilete: '',
		numar_inceput_bilete: '',
		numar_sfarsit_bilete: '',
		data_inceput: '',
		data_sfarsit: '',
		necesitate_bilete: ''
	}

	constructor() { }

	ngOnInit(): void {

		this.addNewRow()
	}

	addNewRow() {

		const copy = this.simpleInput
		copy.id = this.values.informatii.bilete_abonamente.length + 1
		this.values.informatii.bilete_abonamente.push(copy)
	}

	removeRow(index) {
		console.log('remove row', index)
		this.values.informatii.bilete_abonamente.splice(index, 1)
		if(this.values.informatii.bilete_abonamente.length == 0)
			this.addNewRow()
	}

}
