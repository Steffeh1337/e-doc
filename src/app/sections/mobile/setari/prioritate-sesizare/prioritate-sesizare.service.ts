import { helper } from '../../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PrioritateSesizareService {

	url = environment.interop.basePath;
	getSesizarePrioritiesUrl = environment.interop.api.mobile.setari.prioritatiSesizari.getPrioritatiSesizari;
	findSesizarePriorityUrl = environment.interop.api.mobile.setari.prioritatiSesizari.findPrioritateSesizare;
	editSesizarePriorityUrl = environment.interop.api.mobile.setari.prioritatiSesizari.editPrioritateSesizare;
	addSesizarePriorityUrl = environment.interop.api.mobile.setari.prioritatiSesizari.addPrioritateSesizare;


	constructor(
		private http: HttpClient
	) { }

	
	getSesizarePriorities(dataTablesParameters) {
        return this.http.post<{ data: any }>(this.url + this.getSesizarePrioritiesUrl, dataTablesParameters)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }
	

	getSesizarePriority(id){
		return this.http.get<{ data: any }>(this.url + this.findSesizarePriorityUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateSesizarePriority(data){
		return this.http.put<{ data: any }>(this.url + this.editSesizarePriorityUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeSesizarePriority(data){
		return this.http.post<{ data: any }>(this.url + this.addSesizarePriorityUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
