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
export class LoginGuard implements CanActivate {

	constructor (public authService: AuthService, public router: Router, private localStorage: StorageService) { }

	// canActivate(): Observable<boolean> {
	canActivate (): any {
		var self = this
		const token = localStorage.getItem(TOKEN_KEY);
		if (token == null || token == '') {
			return true
		} else {
			// we have a token.. please check
			const isExpired = helperJWT.isTokenExpired(token)
			if (isExpired) {
				return true
			} else {
				// it's not expired.. please let me check the valability/issuer
				const decodedToken = helperJWT.decodeToken(token)
				if (decodedToken.iss !== environment.config.fromTokenValid) {
					return true
				} else {
					self.authService.setToken(token)
					this.router.navigateByUrl('/appointments', { replaceUrl: true });
					return false;
				}
			}
		}
	}

}
