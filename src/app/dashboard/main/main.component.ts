import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { StorageService } from '../../general/storage.service'

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

	constructor (private localStorage: StorageService) { }

	user: any = {
		last_name: '',
		first_name: '',
		email: '',
		phone: '',
		international_number: '',
		dial_code: '',
		iso_code: 'ro',
		cnp: '',
		ci_serie: '',
		ci_numar: ''
	};

	ngOnInit (): void {
		this.pushInfoForm();
	}

	async pushInfoForm () {
		var self = this;

		const data = this.localStorage.getString(environment.config.userKey);
		data.then((res: any) => {
			let json = JSON.parse(res);

			self.user.last_name = json.last_name;
			self.user.first_name = json.first_name;
			self.user.email = json.email;
			self.user.phone = parseInt(json.phone).toString();
			self.user.cnp = json.cnp;

			self.user.dial_code = json.dial_code;
			self.user.iso_code = json.iso_code;
			self.user.international_number = json.international_number;

			self.user.ci_serie = json.ci_serie;
			self.user.ci_numar = json.ci_numar;

			self.user.doctor_type = json.doctor_type;
		});
	}

}
