import { helper } from '../../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TipSolicitareService {

	url = environment.interop.basePath;
	getSolicitareTypesUrl = environment.interop.api.registratura.setari.tipuriSolicitari.getTipuriSolicitari;
	getDepartmentsUrl = environment.interop.api.registratura.setari.tipuriSolicitari.getDepartamente;
	findSolicitareTypeUrl = environment.interop.api.registratura.setari.tipuriSolicitari.findTipSolicitare;
	editSolicitareTypeUrl = environment.interop.api.registratura.setari.tipuriSolicitari.editTipSolicitare;
	addSolicitareTypeUrl = environment.interop.api.registratura.setari.tipuriSolicitari.addTipSolicitare;

	constructor(
		private http: HttpClient
	) { }


	getSolicitareTypes(dataTablesParameters) {
        return this.http.post<{ data: any }>(this.url + this.getSolicitareTypesUrl, dataTablesParameters)
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


	getSolicitareType(id){
		return this.http.get<{ data: any }>(this.url + this.findSolicitareTypeUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateSolicitareType(data){
		return this.http.put<{ data: any }>(this.url + this.editSolicitareTypeUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeSolicitareType(data){
		return this.http.post<{ data: any }>(this.url + this.addSolicitareTypeUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
