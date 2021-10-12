import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { StorageService } from '../general/storage.service'

@Injectable({
	providedIn: 'root'
})
export class DgitlService {

	private basePath = environment.interop.basePath;

	private initializeFormUrl = environment.interop.dgitl.initializeForm
	private storeFormUrl = environment.interop.dgitl.storeForm
	private listSolicitariUrl = environment.interop.dgitl.listSolicitari
	private viewSolicitareUrl = environment.interop.dgitl.viewSolicitare
	private saveMessageSolicitareUrl = environment.interop.dgitl.saveMessageSolicitare
	private cfGetMatricoleUrl = environment.interop.dgitl.cfGetMatricole
    private saveSolicitareCertificatFiscalUrl = environment.interop.dgitl.saveSolicitareCertificatFiscal

	constructor(
		private http: HttpClient,
		private localStorage : StorageService,
	) { }

	initializeForm(tipPersoana : string, idForm : number) {
		return this.http.get<{ data: any }>(this.basePath + this.initializeFormUrl + tipPersoana + '/' + idForm)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	storeForm(data: any) {
		return this.http.post<{ data: any }>(this.basePath + this.storeFormUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	listSolicitari() {
		return this.http.get<{ data: any }>(this.basePath + this.listSolicitariUrl)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	viewSolicitare(solicitareId: number) {
		return this.http.get<{ data: any }>(this.basePath + this.viewSolicitareUrl + solicitareId)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	saveMessageSolicitare(solicitareId: number, data: any) {
		return this.http.post<{ data: any }>(this.basePath + this.saveMessageSolicitareUrl + solicitareId, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	cfGetMatricole() {
		return this.http.get<{ data: any }>(this.basePath + this.cfGetMatricoleUrl)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

    saveSolicitareCertificatFiscal(data: any) {
		return this.http.post<{ data: any }>(this.basePath + this.saveSolicitareCertificatFiscalUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}
}
