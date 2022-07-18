import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class ReviewsService {

	url = environment.interop.basePath;
	listUrl = environment.interop.api.reviews.list;

	constructor (private http: HttpClient) {
	}


	list () {
		return this.http.get<{ data: any }>(this.url + this.listUrl)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}