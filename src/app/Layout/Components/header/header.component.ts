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
		nume: '',
		prenume: '',
		email: '',
		telefon: '',
		f_nume: '',
		cnp: '',
		dialcode: '',
		isocode: 'ro',
		international_number: '',
		type: 0,
		ci_serie: '',
		ci_numar: '',
		f_reg_com: ''
	}

	faEllipsisV = faEllipsisV;

	constructor(public globals: ThemeOptions, private localStorage: StorageService) {
		this.pushInfoForm()
	}

	async pushInfoForm() {
		var self = this
		const data = this.localStorage.getString(environment.config.userKey)
		data.then((res: any) => {
			let json = JSON.parse(res)

			self.user.nume = json.nume
			self.user.prenume = json.prenume
			self.user.email = json.email
			self.user.telefon = parseInt(json.telefon).toString()
			self.user.cnp = json.cnp

			self.user.dialcode = json.dialcode
			self.user.isocode = json.isocode
			self.user.international_number = json.international_number

			self.user.ci_serie = json.ci_serie
			self.user.ci_numar = json.ci_numar

			self.user.type = json.type

			if (typeof json.f_nume !== 'undefined') {
				
				self.user.f_nume = json.f_nume
				self.user.f_reg_com = json.f_reg_com
			} else {
				self.user.f_reg_com = ''
				self.user.f_nume = ''
			}

		})
	}

	@HostBinding('class.isActive')
	get isActiveAsGetter() {
		return this.isActive;
	}

	isActive: boolean;

	@select('config') public config$: Observable<any>;

	toggleSidebarMobile() {
		this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
	}

	toggleHeaderMobile() {
		this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
	}

}
