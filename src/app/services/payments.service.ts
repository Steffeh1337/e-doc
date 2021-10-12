import { helper } from '../../environments/helper'
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class PaymentsService {
    url = environment.interop.basePath
    getTaxUrl = environment.interop.api.payments.getTax;
    requestPaymentUrl = environment.interop.api.payments.requestPayment;
    getCardsUrl = environment.interop.api.payments.getCards;
    processPaymentsRecurenteUrl = environment.interop.api.payments.processPaymentsRecurente;
    removeCardUrl = environment.interop.api.payments.removeCard;

    token: any = null;
    httpOptions: any;

    constructor(private http: HttpClient) {
    }

    
    getTaxes() {
        return this.http.get<{ data: any }>(this.url + this.getTaxUrl)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }

    getCards() {
        return this.http.get<{ data: any }>(this.url + this.getCardsUrl)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }

    removeCard(id: number) {
        return this.http.get<{ data: any }>(this.url + this.removeCardUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
    }

    requestPayment(data: any, saveCard: any = false) {
		return this.http.post<{ data: any }>(this.url + this.requestPaymentUrl + '?saveCard=' + saveCard , data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}

    processPaymentsRecurente(data: any, card: any = false) {
		return this.http.post<{ data: any }>(this.url + this.processPaymentsRecurenteUrl + card, data)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}

}