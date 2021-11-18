import { helper } from '../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PaginiService {

	url = environment.interop.basePath;
	getPaginiMobileUrl = environment.interop.api.mobile.paginiMobile.getPaginiMobile;
	getMobileSectionsUrl = environment.interop.api.mobile.paginiMobile.getSectiuniMobile;
	findPaginaMobilaUrl = environment.interop.api.mobile.paginiMobile.findPaginaMobila;
	editPaginaMobilaUrl = environment.interop.api.mobile.paginiMobile.editPaginaMobila;
	addPaginaMobilaUrl = environment.interop.api.mobile.paginiMobile.addPaginaMobila;

	constructor(
		private http: HttpClient
	) { }


	getMobilePages(dataTablesParameters) {
        return this.http.post<{ data: any }>(this.url + this.getPaginiMobileUrl, dataTablesParameters)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }


	getMobileSections(){
		return this.http.get<{ data: any }>(this.url + this.getMobileSectionsUrl)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}

	findMobilePage(id){
		return this.http.get<{ data: any }>(this.url + this.findPaginaMobilaUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateMobilePage(data){
		return this.http.put<{ data: any }>(this.url + this.editPaginaMobilaUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeMobilePage(data){
		return this.http.post<{ data: any }>(this.url + this.addPaginaMobilaUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
