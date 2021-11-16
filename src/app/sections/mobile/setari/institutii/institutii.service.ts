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
}
