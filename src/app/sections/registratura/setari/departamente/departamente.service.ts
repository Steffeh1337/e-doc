import { helper } from '../../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class DepartamenteService {

	url = environment.interop.basePath;
	getDepartmentsUrl = environment.interop.api.registratura.setari.departamente.getDepartments;
	findDepartmentUrl = environment.interop.api.registratura.setari.departamente.findDepartment;
	editDepartmentUrl = environment.interop.api.registratura.setari.departamente.editDepartment;
	addDepartmentUrl = environment.interop.api.registratura.setari.departamente.addDepartment;


	constructor(
		private http: HttpClient
	) { }


	getDepartments(dataTablesParameters) {
        return this.http.post<{ data: any }>(this.url + this.getDepartmentsUrl, dataTablesParameters)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }
	

	findDepartment(id){
		return this.http.get<{ data: any }>(this.url + this.findDepartmentUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateDepartment(data){
		return this.http.put<{ data: any }>(this.url + this.editDepartmentUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeDepartment(data){
		return this.http.post<{ data: any }>(this.url + this.addDepartmentUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
