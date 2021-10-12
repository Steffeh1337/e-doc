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
	selector: 'app-simple-element',
	templateUrl: './simple-element.component.html',
	styleUrls: ['./simple-element.component.sass']
})
export class SimpleElementComponent implements OnInit {

	@Input() tipPersoana: string

	matcher = new MyErrorStateMatcher();

	arrData : any = []
	simpleInput: any = {
		nume : ''
	}

	constructor() { }
	

	ngOnInit(): void {

		this.addNewRow()
	}

	addNewRow() {
		console.log('adding a new row')
		this.arrData.push(this.simpleInput)
	}

	removeRow(index) {
		console.log('remove row', index)
		this.arrData.splice(index, 1)
		if(this.arrData.length == 0)
		this.addNewRow()
	}

}
