import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment'

import { JwtHelperService } from '@auth0/angular-jwt';
const helperJWT = new JwtHelperService();

import { BehaviorSubject, from, Observable, Subject } from 'rxjs';

import { StorageService } from '../general/storage.service'

const TOKEN_KEY = environment.config.tokenKey;
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	public isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	token = '';

	private basePath = environment.interop.basePath;

	private loginPath = environment.interop.user.loginUrl;
	private refreshLogin = environment.interop.user.refreshLogin;
	private resendCodeUrl = environment.interop.user.resendCode
	private confirmCodeUrl = environment.interop.user.confirmCode
	private checkEmailPasswordResetUrl = environment.interop.user.checkEmailPasswordReset
	private resendCodePasswordResetUrl = environment.interop.user.resendCodePasswordReset
	private verifyCodePasswordResetUrl = environment.interop.user.verifyCodePasswordReset
	private updatePasswordResetUrl = environment.interop.user.updatePasswordReset
	private fileUploadRegisterUrl = environment.interop.user.fileUploadRegister
	private fileUploadRegisterBase64Url = environment.interop.user.fileUploadRegisterBase64
	private registerAccountUrl = environment.interop.user.registerAccount
	private findDetailsUrl = environment.interop.user.findDetails
	private updatePasswordAccountUrl = environment.interop.user.updatePasswordAccount
	private updateInfoAccountUrl = environment.interop.user.updateInfoAccount
	private addressSaveUrl = environment.interop.user.addressSave
	private addressListUrl = environment.interop.user.addressList
	private addressDeleteUrl = environment.interop.user.addressDelete

	private checkPinRegisterUrl = environment.interop.user.checkPinRegister


	constructor (
		private http: HttpClient,
		private localStorage : StorageService,
		private router: Router
		) { 
		this.loadToken();

	}

	setToken(token) {
		this.token = token
	}

	public setAuthenticatedNext(bool): void {
		this.isAuthenticated.next(bool)
	}

	async loadToken() {
		var self = this
		const token = await self.localStorage.getString(TOKEN_KEY );
		if (token && token.value) {
			this.token = token.value;
			const isExpired = helperJWT.isTokenExpired(token.value);
			if(isExpired) {
				await this.refreshToken(token.value)
				.then(async (res) => {
					// success?
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data.token !== 'undefined') {
							// everything ok now, we wrap it up now
							self.setToken(response.data.token)
							await self.localStorage.setString(TOKEN_KEY, response.data.token )
							this.isAuthenticated.next(true);
						} else {
							this.isAuthenticated.next(false);
							return false;
						}

					} else {
						
						this.isAuthenticated.next(false);
						return false
					}
				})
				.catch( async (err) => {
					
					this.isAuthenticated.next(false);
					return false
				})
				// TRY TO refresh token now
				
			}else {
				this.isAuthenticated.next(true);
			}
			
		} else {
			this.isAuthenticated.next(false);
		}
	}

	refreshToken(token) {

		let obj = {
			token
		}

		return this.http.post<{ data: any }>(this.basePath + this.refreshLogin, obj)
			.toPromise()
			.then(
				res => res,
				err => err.error
			)
			.catch(e => e.error);
	}

	login(credentials: { email, password }) {
		return this.http.post<{ data: any }>(this.basePath + this.loginPath, credentials)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	resendCode(data) {
		return this.http.post<{ data: any }>(this.basePath + this.resendCodeUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	confirmCode(data) {
		return this.http.post<{ data: any }>(this.basePath + this.confirmCodeUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	checkEmailPasswordReset(data) {
		return this.http.post<{ data: any }>(this.basePath + this.checkEmailPasswordResetUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	resendCodePasswordReset(data) {
		return this.http.post<{ data: any }>(this.basePath + this.resendCodePasswordResetUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	verifyCodePasswordReset(data) {
		return this.http.post<{ data: any }>(this.basePath + this.verifyCodePasswordResetUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	updatePasswordReset(data) {
		return this.http.post<{ data: any }>(this.basePath + this.updatePasswordResetUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	fileUpload(formData: FormData) {
		return this.http.post<{ data: any }>(this.basePath + this.fileUploadRegisterUrl, formData)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	registerAccount(formData: FormData) {
		return this.http.post<{ data: any }>(this.basePath + this.registerAccountUrl, formData)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	logout(): Promise<void> {
		this.isAuthenticated.next(false);
		return this.localStorage.removeItem(TOKEN_KEY);
	}

	findDetails() {
		return this.http.get<{ data: any }>(this.basePath + this.findDetailsUrl)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	updatePasswordAccount(data) {
		return this.http.post<{ data: any }>(this.basePath + this.updatePasswordAccountUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	updateInfoAccount(data) {
		return this.http.post<{ data: any }>(this.basePath + this.updateInfoAccountUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	public getToken(): string {
		return this.token.replace('"', '')
	}

	addressSave(data) {
		return this.http.post<{ data: any }>(this.basePath + this.addressSaveUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	addressList() {
		return this.http.get<{ data: any }>(this.basePath + this.addressListUrl)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	addressDelete(id: number) {
		return this.http.get<{ data: any }>(this.basePath + this.addressDeleteUrl + id)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	checkPinRegister(data) {
		return this.http.post<{ data: any }>(this.basePath + this.checkPinRegisterUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}
}
