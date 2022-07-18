import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth-module/auth.service'
import { Router } from '@angular/router';
import { filter, map, take } from 'rxjs/operators';

import { StorageService } from '../general/storage.service'
import { environment } from '.././../environments/environment'

import { JwtHelperService } from '@auth0/angular-jwt';
const helperJWT = new JwtHelperService();

const TOKEN_KEY = environment.config.tokenKey;

@Injectable({
	providedIn: 'root'
})


export class AuthGuard implements CanActivate {

	token
	constructor (public authService: AuthService, public router: Router, private localStorage: StorageService) { }

	// canActivate(): Observable<boolean> {
	canActivate (): boolean {
		var self = this;

		const token = localStorage.getItem(TOKEN_KEY);
		if (token == null || token == '') {
			// redirect to login please
			this.router.navigateByUrl('/pages/login', { replaceUrl: true });
			return false
		} else {
			const isExpired = helperJWT.isTokenExpired(token)
			if (isExpired) {
				this.router.navigateByUrl('/pages/login', { replaceUrl: true });
				return false
			} else {
				// we are not expired.. please check the issuer
				const decodedToken = helperJWT.decodeToken(token)
				if (decodedToken.iss !== environment.config.fromTokenValid) {
					this.router.navigateByUrl('/pages/login', { replaceUrl: true });
					return false
				} else {
					// we are fine here, please allow
					self.authService.setToken(token)
					return true
				}
			}
		}
	}

}
