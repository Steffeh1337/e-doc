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
	selector: 'app-tip-taxa-form',
	templateUrl: './tip-taxa-form.component.html',
	styleUrls: ['./tip-taxa-form.component.sass']
})
export class TipTaxaFormComponent implements OnInit {

	@Input() judete: any = []
	@Input() sectoare: any = []

	matcher = new MyErrorStateMatcher();
	
	@Input() values

	// arrData: any = []
	simpleInput: any = {
		tip_taxa: '',
		data_inceput: '',
		data_sfarsit: '',
		suprafata: '',
		observatii: ''
	}


	constructor() { }


	ngOnInit(): void {

		this.addNewRow()
	}

	addNewRow() {
		console.log('adding a new row')
		this.values.informatii.tip_taxa.push(this.simpleInput)
	}

	removeRow(index) {
		console.log('remove row', index)
		this.values.informatii.tip_taxa.splice(index, 1)
		if (this.values.informatii.tip_taxa.length == 0)
			this.addNewRow()
	}

}
