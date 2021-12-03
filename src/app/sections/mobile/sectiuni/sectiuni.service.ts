import { helper } from '../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectiuniService {

	url = environment.interop.basePath;

	getMobileSectionsUrl = environment.interop.api.mobile.sectiuniMobile.getSectiuniMobile;
	findMobileSectionUrl = environment.interop.api.mobile.sectiuniMobile.findSectiuneMobila;
	editMobileSectionUrl = environment.interop.api.mobile.sectiuniMobile.editSectiuneMobila;
	addMobileSectionUrl = environment.interop.api.mobile.sectiuniMobile.addSectiuneMobila;

	getMobileSectionFAQUrl = environment.interop.api.mobile.sectiuniMobile.getFAQ;
	findMobileSectionFAQUrl = environment.interop.api.mobile.sectiuniMobile.findFAQ;
	editMobileSectionFAQUrl = environment.interop.api.mobile.sectiuniMobile.editSectiuneMobilaFAQ;
	addMobileSectionFAQUrl = environment.interop.api.mobile.sectiuniMobile.addSectiuneMobilaFAQ;
	deleteMobileSectionFAQUrl = environment.interop.api.mobile.sectiuniMobile.deleteFAQ;

	
	constructor(
		private http: HttpClient
	) { }


	getMobileSections(dataTablesParameters) {
        return this.http.post<{ data: any }>(this.url + this.getMobileSectionsUrl, dataTablesParameters)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }


	findMobileSection(id){
		return this.http.get<{ data: any }>(this.url + this.findMobileSectionUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateMobileSection(data){
		return this.http.put<{ data: any }>(this.url + this.editMobileSectionUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeMobileSection(data){
		return this.http.post<{ data: any }>(this.url + this.addMobileSectionUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	getFAQ(dataTablesParameters, id){
		return this.http.post<{ data: any }>(this.url + this.getMobileSectionFAQUrl + id, dataTablesParameters)
		.toPromise()
		.then(
			res => res,
			err => err.error
		)
		.catch(e => e.error);
	}


	findFAQ(id){
		return this.http.get<{ data: any }>(this.url + this.findMobileSectionFAQUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateMobileSectionFAQ(data){
		return this.http.put<{ data: any }>(this.url + this.editMobileSectionFAQUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeMobileSectionFAQ(data, id){
		return this.http.post<{ data: any }>(this.url + this.addMobileSectionFAQUrl + id, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	deleteMobileSectionFAQ(id){
		return this.http.delete<{ data: any}>(this.url + this.deleteMobileSectionFAQUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
