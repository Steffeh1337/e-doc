import { helper } from '../../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrioritateSolicitareService {

	url = environment.interop.basePath;
	getSolicitarePrioritiesUrl = environment.interop.api.registratura.setari.prioritatiSolicitari.getPrioritatiSolicitari;
	findSolicitarePriorityUrl = environment.interop.api.registratura.setari.prioritatiSolicitari.findPrioritateSolicitare;
	editSolicitarePriorityUrl = environment.interop.api.registratura.setari.prioritatiSolicitari.editPrioritateSolicitare;
	addSolicitarePriorityUrl = environment.interop.api.registratura.setari.prioritatiSolicitari.addPrioritateSolicitare;

	constructor(
		private http: HttpClient
	) { }


	getSolicitarePriorities(dataTablesParameters) {
        return this.http.post<{ data: any }>(this.url + this.getSolicitarePrioritiesUrl, dataTablesParameters)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }
	

	getSolicitarePriority(id){
		return this.http.get<{ data: any }>(this.url + this.findSolicitarePriorityUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateSolicitarePriority(data){
		return this.http.put<{ data: any }>(this.url + this.editSolicitarePriorityUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeSolicitarePriority(data){
		return this.http.post<{ data: any }>(this.url + this.addSolicitarePriorityUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
