import { helper } from '../../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StatusSolicitareService {

	url = environment.interop.basePath;
	getSolicitariStatusesUrl = environment.interop.api.registratura.setari.statusuriSolicitari.getStatusuriSolicitari;
	findSolicitareStatusUrl = environment.interop.api.registratura.setari.statusuriSolicitari.findStatusSolicitare;
	editSolicitareStatusUrl = environment.interop.api.registratura.setari.statusuriSolicitari.editStatusSolicitare;
	addSolicitareStatusUrl = environment.interop.api.registratura.setari.statusuriSolicitari.addStatusSolicitare;


  	constructor(
		private http: HttpClient
	) { }

	
	getSolicitariStatuses(dataTablesParameters) {
        return this.http.post<{ data: any }>(this.url + this.getSolicitariStatusesUrl, dataTablesParameters)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }
	

	getSolicitareStatus(id){
		return this.http.get<{ data: any }>(this.url + this.findSolicitareStatusUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateSolicitareStatus(data){
		return this.http.put<{ data: any }>(this.url + this.editSolicitareStatusUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeSolicitareStatus(data){
		return this.http.post<{ data: any }>(this.url + this.addSolicitareStatusUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
