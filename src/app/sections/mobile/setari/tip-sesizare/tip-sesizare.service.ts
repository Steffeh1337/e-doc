import { helper } from '../../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TipSesizareService {

	url = environment.interop.basePath;
	getSesizareTypesUrl = environment.interop.api.mobile.setari.tipuriSesizari.getTipuriSesizari;
	getDepartmentsUrl = environment.interop.api.mobile.setari.tipuriSesizari.getDepartamente;
	findSesizareTypeUrl = environment.interop.api.mobile.setari.tipuriSesizari.findTipSesizare;
	editSesizareTypeUrl = environment.interop.api.mobile.setari.tipuriSesizari.editTipSesizare;
	addSesizareTypeUrl = environment.interop.api.mobile.setari.tipuriSesizari.addTipSesizare;

	constructor(
		private http: HttpClient
	) { }

	
	getSesizareTypes(dataTablesParameters) {
        return this.http.post<{ data: any }>(this.url + this.getSesizareTypesUrl, dataTablesParameters)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }


	getDepartments(){
		return this.http.get<{ data: any }>(this.url + this.getDepartmentsUrl)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	getSesizareType(id){
		return this.http.get<{ data: any }>(this.url + this.findSesizareTypeUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateSesizareType(data){
		return this.http.put<{ data: any }>(this.url + this.editSesizareTypeUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeSesizareType(data){
		return this.http.post<{ data: any }>(this.url + this.addSesizareTypeUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
