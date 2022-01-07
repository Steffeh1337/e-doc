import { helper } from '../../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class PermisiuniService {

	url = environment.interop.basePath;
	getPermissionsUrl = environment.interop.api.administrativ.setari.permisiuni.list;
	findPermissionUrl = environment.interop.api.administrativ.setari.permisiuni.find;
	editPermissionUrl = environment.interop.api.administrativ.setari.permisiuni.edit;
	addPermissionUrl = environment.interop.api.administrativ.setari.permisiuni.add;

	constructor (
		private http: HttpClient
	) { }


	getPermissions (dataTablesParameters) {
		return this.http.post<{ data: any }>(this.url + this.getPermissionsUrl, dataTablesParameters)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	findPermission (id) {
		return this.http.get<{ data: any }>(this.url + this.findPermissionUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updatePermission (data) {
		return this.http.put<{ data: any }>(this.url + this.editPermissionUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storePermission (data) {
		return this.http.post<{ data: any }>(this.url + this.addPermissionUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
