import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

import { JwtHelperService } from '@auth0/angular-jwt';
const helperJWT = new JwtHelperService();

import { BehaviorSubject } from 'rxjs';

import { StorageService } from '../general/storage.service';

const TOKEN_KEY = environment.config.tokenKey;

@Injectable({
	providedIn: 'root'
})


export class AuthService {

	public isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	token = '';

	private basePath = environment.interop.basePath;

	private loginPath = environment.interop.user.loginUrl;
	private refreshLogin = environment.interop.user.refreshLogin;
	private findDetailsUrl = environment.interop.user.findDetails;
	private updatePasswordAccountUrl = environment.interop.user.updatePasswordAccount;
	private updateScheduleUrl = environment.interop.user.updateSchedule;
	private updateInfoAccountUrl = environment.interop.user.updateInfoAccount;

	constructor (
		private http: HttpClient,
		private localStorage: StorageService
	) {
		this.loadToken();
	}

	setToken (token) {
		this.token = token;
	}

	public setAuthenticatedNext (bool): void {
		this.isAuthenticated.next(bool)
	}

	async loadToken () {
		var self = this;

		const token = await self.localStorage.getString(TOKEN_KEY);

		if (token && token.value) {
			this.token = token.value;

			const isExpired = helperJWT.isTokenExpired(token.value);
			if (isExpired) {
				await this.refreshToken(token.value)
					.then(async (res) => {
						let response = (typeof res.status_code !== 'undefined' ? res : res.error);
						if (typeof response.status_code !== 'undefined') {
							if (response.status_code == 200 && typeof response.data.token !== 'undefined') {
								self.setToken(response.data.token);
								await self.localStorage.setString(TOKEN_KEY, response.data.token);
								this.isAuthenticated.next(true);
							} else {
								this.isAuthenticated.next(false);
								return false;
							}
						} else {
							this.isAuthenticated.next(false);
							return false;
						}
					})
					.catch(async (err) => {
						this.isAuthenticated.next(false);
						return false;
					})
			} else {
				this.isAuthenticated.next(true);
			}

		} else {
			this.isAuthenticated.next(false);
		}
	}

	refreshToken (token) {

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

	login (credentials: { email, password }) {
		return this.http.post<{ data: any }>(this.basePath + this.loginPath, credentials)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	logout (): Promise<void> {
		this.isAuthenticated.next(false);
		return this.localStorage.removeItem(TOKEN_KEY);
	}

	findDetails () {
		return this.http.get<{ data: any }>(this.basePath + this.findDetailsUrl)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	updatePasswordAccount (data) {
		return this.http.post<{ data: any }>(this.basePath + this.updatePasswordAccountUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	updateSchedule (data) {
		return this.http.post<{ data: any }>(this.basePath + this.updateScheduleUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	updateInfoAccount (data) {
		return this.http.post<{ data: any }>(this.basePath + this.updateInfoAccountUrl, data)
			.toPromise()
			.then(
				res => res,
				err => err
			).catch(e => e);
	}

	public getToken (): string {
		return this.replaceAll(this.token, '"', '');
		// return this.token.replace('"', '');
	}

	public replaceAll (text: string, search: string, replace: string) {
		return text.split(search).join(replace);
	}
}	
