import { helper } from '../../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StatusSesizareService {

	url = environment.interop.basePath;
	getSesizareStatusesUrl = environment.interop.api.mobile.setari.statusuriSesizari.getStatusuriSesizari;
	findSesizareStatusUrl = environment.interop.api.mobile.setari.statusuriSesizari.findStatusSesizare;
	editSesizareStatusUrl = environment.interop.api.mobile.setari.statusuriSesizari.editStatusSesizare;
	addSesizareStatusUrl = environment.interop.api.mobile.setari.statusuriSesizari.addStatusSesizare;


	constructor(
		private http: HttpClient
	) { }

	
	getSesizareStatuses(dataTablesParameters) {
        return this.http.post<{ data: any }>(this.url + this.getSesizareStatusesUrl, dataTablesParameters)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }
	

	getSesizareStatus(id){
		return this.http.get<{ data: any }>(this.url + this.findSesizareStatusUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateSesizareStatus(data){
		return this.http.put<{ data: any }>(this.url + this.editSesizareStatusUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeSesizareStatus(data){
		return this.http.post<{ data: any }>(this.url + this.addSesizareStatusUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
