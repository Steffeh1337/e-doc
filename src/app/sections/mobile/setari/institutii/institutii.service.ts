import { helper } from '../../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class InstitutiiService {

	url = environment.interop.basePath;
	getInstitutiiUrl = environment.interop.api.mobile.setari.institutii.getInstitutii;
	findInstitutieUrl = environment.interop.api.mobile.setari.institutii.findInstitutie;
	editInstitutieUrl = environment.interop.api.mobile.setari.institutii.editInstitutie;
	addInstitutieUrl = environment.interop.api.mobile.setari.institutii.addInstitutie;

	getInstitutieCompartimenteUrl = environment.interop.api.mobile.setari.institutii.getCompartimente;
	findInstitutieCompartimentUrl = environment.interop.api.mobile.setari.institutii.findCompartiment;
	editInstitutieCompartimentUrl = environment.interop.api.mobile.setari.institutii.editCompartiment;
	addInstitutieCompartiment = environment.interop.api.mobile.setari.institutii.addCompartiment;

	constructor(
		private http: HttpClient
	) { }


	getInstitutii(dataTablesParameters) {
        return this.http.post<{ data: any }>(this.url + this.getInstitutiiUrl, dataTablesParameters)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }
	

	findInstitutie(id){
		return this.http.get<{ data: any }>(this.url + this.findInstitutieUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateInstitutie(data){
		return this.http.put<{ data: any }>(this.url + this.editInstitutieUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeInstitutie(data){
		return this.http.post<{ data: any }>(this.url + this.addInstitutieUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	getCompartimente(dataTablesParameters, id){
		return this.http.post<{ data: any }>(this.url + this.getInstitutieCompartimenteUrl + id, dataTablesParameters)
		.toPromise()
		.then(
			res => res,
			err => err.error
		)
		.catch(e => e.error);
	}


	findCompartiment(id){
		return this.http.get<{ data: any }>(this.url + this.findInstitutieCompartimentUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateCompartiment(data){
		return this.http.put<{ data: any }>(this.url + this.editInstitutieCompartimentUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeCompartiment(data, id){
		return this.http.post<{ data: any }>(this.url + this.addInstitutieCompartiment + id, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
