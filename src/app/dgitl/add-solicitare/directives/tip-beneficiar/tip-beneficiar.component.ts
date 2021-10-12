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
	selector: 'app-tip-beneficiar',
	templateUrl: './tip-beneficiar.component.html',
	styleUrls: ['./tip-beneficiar.component.sass']
})
export class TipBeneficiarComponent implements OnInit {

	@Input() tipSolicitant: number = 0
	@Input() tipPersoana: string = 'persoanaFizica'
	@Input() judete: any = []
	@Input() sectoare: any = []


	matcher = new MyErrorStateMatcher();

	loadForm = 0

	form: any = {
		persoanaFizica: {
			pf_nume: '',
			pf_prenume: '',
			pf_email: '',
			pf_telefon: '',
			pf_cnp: '',
			pf_ci_serie: '',
			pf_ci_numar: '',
			pf_judet: '',
			pf_oras: '',
			pf_sector: '',
			pf_strada: '',
			pf_numar: '',
			pf_bloc: '',
			pf_scara: '',
			pf_etaj: '',
			pf_apartament: '',
			pf_observatii: ''
		},
		persoanaJuridica: {
			pj_sediu_denumire: '',
			pj_sediu_cui: '',
			pj_sediu_email: '',
			pj_sediu_telefon: '',
			pj_sediu_judet: '',
			pj_sediu_oras: '',
			pj_sediu_sector: '',
			pj_sediu_strada: '',
			pj_sediu_numar: '',
			pj_sediu_bloc: '',
			pj_sediu_scara: '',
			pj_sediu_etaj: '',
			pj_sediu_apartament: '',
			pj_reprezentant_nume: '',
			pj_reprezentant_prenume: '',
			pj_reprezentant_email: '',
			pj_reprezentant_telefon: '',
			pj_reprezentant_cnp: '',
			pj_reprezentant_ci_serie: '',
			pj_reprezentant_ci_numar: '',
			pj_reprezentant_judet: '',
			pj_reprezentant_oras: '',
			pj_reprezentant_sector: '',
			pj_reprezentant_strada: '',
			pj_reprezentant_numar: '',
			pj_reprezentant_bloc: '',
			pj_reprezentant_scara: '',
			pj_reprezentant_etaj: '',
			pj_reprezentant_apartament: '',
			pj_reprezentant_observatii: '',

		}
	}

	constructor() { }

	ngOnInit(): void {
		this.loadForm = 1
	}

}
