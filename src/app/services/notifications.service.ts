import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class NotificationsService {

	url = environment.interop.basePath;
	listUrl = environment.interop.api.notifications.list;
	markAsReadUrl = environment.interop.api.notifications.markAsRead

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

	markAsRead (id: number) {
		return this.http.get<{ data: any }>(this.url + this.markAsReadUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}