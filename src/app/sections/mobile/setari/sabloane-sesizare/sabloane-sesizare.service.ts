import { helper } from '../../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SabloaneSesizareService {

	url = environment.interop.basePath;
	getSesizareSabloaneUrl = environment.interop.api.mobile.setari.sabloaneSesizari.getSabloaneSesizari;
	findSesizareSablonUrl = environment.interop.api.mobile.setari.sabloaneSesizari.findSablonSesizare;
	editSesizareSablonUrl = environment.interop.api.mobile.setari.sabloaneSesizari.editSablonSesizare;
	addSesizareSablonUrl = environment.interop.api.mobile.setari.sabloaneSesizari.addSablonSesizare;


  	constructor(
		private http: HttpClient
	) { }


	getSesizareSabloane(dataTablesParameters) {
        return this.http.post<{ data: any }>(this.url + this.getSesizareSabloaneUrl, dataTablesParameters)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }
	

	getSesizareSablon(id){
		return this.http.get<{ data: any }>(this.url + this.findSesizareSablonUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateSesizareSablon(data){
		return this.http.put<{ data: any }>(this.url + this.editSesizareSablonUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeSesizareSablon(data){
		return this.http.post<{ data: any }>(this.url + this.addSesizareSablonUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
