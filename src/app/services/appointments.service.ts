import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class AppointmentsService {
	url = environment.interop.basePath;
	getAppointmentsUrl = environment.interop.api.appointments.list;
	getDataUrl = environment.interop.api.appointments.getData;
	reviewUrl = environment.interop.api.appointments.review;
	cancelUrl = environment.interop.api.appointments.cancel;

	constructor (private http: HttpClient) {
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

	getAppointments () {
		return this.http.get<{ data: any }>(this.url + this.getAppointmentsUrl)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}

	makeReview (id_appointment: number, data: any) {
		return this.http.post<{ data: any }>(this.url + this.reviewUrl + id_appointment, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}

	cancelAppointment (id_appointment: number, data: any) {
		return this.http.post<{ data: any }>(this.url + this.cancelUrl + id_appointment, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}
}