import { helper } from '../../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SabloaneSolicitareService {

	url = environment.interop.basePath;
	getSolicitareSabloaneUrl = environment.interop.api.registratura.setari.sabloaneSolicitari.getSabloaneSolicitari;
	findSolicitareSablonUrl = environment.interop.api.registratura.setari.sabloaneSolicitari.findSablonSolicitare;
	editSolicitareSablonurl = environment.interop.api.registratura.setari.sabloaneSolicitari.editSablonSolicitare;
	addSolicitareSablonUrl = environment.interop.api.registratura.setari.sabloaneSolicitari.addSablonSolicitare;

	constructor(
		private http: HttpClient
	) { }


	getSolicitareSabloane(dataTablesParameters) {
        return this.http.post<{ data: any }>(this.url + this.getSolicitareSabloaneUrl, dataTablesParameters)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }
	

	getSolicitareSablon(id){
		return this.http.get<{ data: any }>(this.url + this.findSolicitareSablonUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateSolicitareSablon(data){
		return this.http.put<{ data: any }>(this.url + this.editSolicitareSablonurl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeSolicitareSablon(data){
		return this.http.post<{ data: any }>(this.url + this.addSolicitareSablonUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
