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
