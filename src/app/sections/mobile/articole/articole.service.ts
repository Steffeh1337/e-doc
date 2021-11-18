import { helper } from '../../../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class ArticoleService {

	url = environment.interop.basePath;
	getArticlesUrl = environment.interop.api.mobile.articole.getArticole;
	findArticleUrl = environment.interop.api.mobile.articole.findArticol;
	editArticleUrl = environment.interop.api.mobile.articole.editArticol;
	addArticleUrl = environment.interop.api.mobile.articole.addArticol;
	updatePublicViewUrl = environment.interop.api.mobile.articole.updatePublicView;


	constructor(
		private http: HttpClient
	) { }


	getArticles(dataTablesParameters) {
        return this.http.post<{ data: any }>(this.url + this.getArticlesUrl, dataTablesParameters)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }
	

	findArticle(id){
		return this.http.get<{ data: any }>(this.url + this.findArticleUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updateArticle(data){
		return this.http.put<{ data: any }>(this.url + this.editArticleUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	storeArticle(data){
		return this.http.post<{ data: any }>(this.url + this.addArticleUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}


	updatePublicView(id){
		return this.http.get<{ data: any }>(this.url + this.updatePublicViewUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}
