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
	selector: 'app-contracte-publicitate-form',
	templateUrl: './contracte-publicitate-form.component.html',
	styleUrls: ['./contracte-publicitate-form.component.sass']
})
export class ContractePublicitateFormComponent implements OnInit {

	matcher = new MyErrorStateMatcher();

	@Input() values

	arrData: any = []
	simpleInput: any = {
		contract: '',
		valoare: '',
		data_inceput: '',
		data_sfarsit: '',
		luna_declaratiei: null,
		beneficiar: null,
		observatii: ''
	}

	beneficiari: any = [
		{
			id: 1,
			name: 'Persoana fizica'
		},
		{
			id: 2,
			name: 'Persoana juridica'
		}
	]

	luniCalendaristice: any = [
		{
			id: 1,
			name: 'Ianuarie'

		},
		{
			id: 2,
			name: 'Februarie'

		},
		{
			id: 3,
			name: 'Martie'

		},
		{
			id: 4,
			name: 'Aprilie'

		},
		{
			id: 5,
			name: 'Mai'

		},
		{
			id: 6,
			name: 'Iunie'

		},
		{
			id: 7,
			name: 'Iulie'

		},
		{
			id: 8,
			name: 'August'

		},
		{
			id: 9,
			name: 'Septembrie'

		},
		{
			id: 10,
			name: 'Octombrie'

		},
		{
			id: 11,
			name: 'Noiembrie'

		},
		{
			id: 12,
			name: 'Decembrie'

		}
	]

	constructor() { }

	ngOnInit(): void {

		this.addNewRow()
	}

	addNewRow() {
		console.log('adding a new row')
		this.values.informatii.contracte_publicitate.push(this.simpleInput)
	}

	removeRow(index) {
		console.log('remove row', index)
		this.values.informatii.contracte_publicitate.splice(index, 1)
		if (this.values.informatii.contracte_publicitate.length == 0)
			this.addNewRow()
	}

}
