import { helper } from '../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})

export class LoguriService {

	url = environment.interop.basePath;
	findLogUrl = environment.interop.api.administrativ.loguri.findLog;
	getDataUrl = environment.interop.api.administrativ.loguri.getData;

	constructor (
		private http: HttpClient
	) { }


	findLog (id) {
		return this.http.get<{ data: any }>(this.url + this.findLogUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	getAdvancedFilterData () {
		return this.http.get<{ data: any }>(this.url + this.getDataUrl)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
