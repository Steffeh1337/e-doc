import { Component, HostBinding } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ThemeOptions } from '../../../theme-options';

import { StorageService } from '../../../general/storage.service'

import { environment } from '../../../../environments/environment'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
})
export class HeaderComponent {

	user: any = {
		last_name: '',
		first_name: '',
		email: '',
		phone: '',
		cnp: '',
		dialcode: '',
		isocode: 'ro',
		international_number: '',
		ci_serie: '',
		ci_numar: ''
	}

	faEllipsisV = faEllipsisV;

	constructor (public globals: ThemeOptions, private localStorage: StorageService) {
		this.pushInfoForm()
	}

	async pushInfoForm () {
		var self = this
		const data = this.localStorage.getString(environment.config.userKey)
		data.then((res: any) => {
			let json = JSON.parse(res)

			self.user.last_name = json.last_name
			self.user.first_name = json.first_name
			self.user.email = json.email
			self.user.phone = parseInt(json.phone).toString()
			self.user.cnp = json.cnp

			self.user.dialcode = json.dialcode
			self.user.isocode = json.isocode
			self.user.international_number = json.international_number

			self.user.ci_serie = json.ci_serie
			self.user.ci_numar = json.ci_numar
		});
	}

	@HostBinding('class.isActive')
	get isActiveAsGetter () {
		return this.isActive;
	}

	isActive: boolean;

	@select('config') public config$: Observable<any>;

	toggleSidebarMobile () {
		this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
	}

	toggleHeaderMobile () {
		this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
	}

}
