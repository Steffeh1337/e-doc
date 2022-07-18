import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { environment } from '../../../environments/environment'

import { ErrorStateMatcher } from '@angular/material/core';

import { AuthService } from '../../auth-module/auth.service'

import { NotificationService } from '../../general/notification.service'

import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';

import { StorageService } from '../../general/storage.service'

import { MatDialog } from '@angular/material/dialog';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState (control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import { cloneDeep, random } from 'lodash-es';
import {
	GlobalConfig,
	ToastrService,
} from 'ngx-toastr';

import { PhoneNumberUtil, PhoneNumber } from 'google-libphonenumber'
import { C, T } from '@angular/cdk/keycodes';
const phoneNumberUtil = PhoneNumberUtil.getInstance();

import { helper } from '../../../environments/helper'

@Component({
	selector: 'app-setari',
	templateUrl: './setari.component.html',
	styleUrls: ['./setari.component.sass']
})


export class SetariComponent implements OnInit {

	user: any = {
		last_name: '',
		first_name: '',
		email: '',
		telefon: '',
		international_number: '',
		dial_code: '',
		iso_code: 'ro',
		cnp: '',
		ci_serie: '',
		doctor_type: 0,
		ci_numar: '',
		clinic_name: '',
		field_name: '',
		doctor_type_name: ''
	};

	schedules: any = [];

	// general error
	errorTitle: string = environment.config.customNotifications.headers.error;
	errorIcon: string = environment.config.customNotifications.icons.error;
	errorType: string = environment.config.customNotifications.icons.error;
	// general success alert
	successTitle: string = environment.config.customNotifications.headers.success;
	successIcon: string = environment.config.customNotifications.icons.success;
	successType: string = environment.config.customNotifications.icons.success;

	@ViewChild('ngxLoading') ngxLoadingComponent: NgxLoadingComponent;
	@ViewChild('customLoadingTemplate') customLoadingTemplate: TemplateRef<any>;
	public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
	public loading = false;
	public loadingTemplate: TemplateRef<any>;
	matcher = new MyErrorStateMatcher();

	hide: boolean = true;
	hide_confirmation: boolean = true;
	hide_current: boolean = true;

	private lastInserted: number[] = [];
	options: GlobalConfig;

	toggleMobileSidebar: any;
	faStar = faStar;
	faPlus = faPlus;
	faAngleDown = faAngleDown;
	faSearch = faSearch;
	faTags = faTags;
	faCalendarAlt = faCalendarAlt;

	formPasswords: FormGroup;
	form: FormGroup;
	formSchedules: FormGroup;
	updateFormShow: boolean = false;

	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

	selectedCountry: any = ['ro'];

	phone: any = {}

	constructor (
		private authService: AuthService,
		private notificationService: NotificationService,
		private localStorage: StorageService,
		public toastr: ToastrService,
		public dialog: MatDialog
	) {

		this.options = this.toastr.toastrConfig;

		this.formPasswords = new FormGroup({
			password: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(environment.config.validatorsAccrossApp.minPassword),
				Validators.maxLength(environment.config.validatorsAccrossApp.maxPassword)
			])),
			password_confirmation: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(environment.config.validatorsAccrossApp.minPassword),
				Validators.maxLength(environment.config.validatorsAccrossApp.maxPassword)
			])),
		})

		this.form = new FormGroup({
			ci_serie: new FormControl('', []),
			ci_numar: new FormControl('', []),
			last_name: new FormControl('', Validators.compose([
				Validators.minLength(environment.config.validatorsAccrossApp.minStringLength),
				Validators.maxLength(environment.config.validatorsAccrossApp.maxStringLength),
				Validators.required
			])),
			first_name: new FormControl('', Validators.compose([
				Validators.minLength(environment.config.validatorsAccrossApp.minStringLength),
				Validators.maxLength(environment.config.validatorsAccrossApp.maxStringLength),
				Validators.required
			])),
			telefon: new FormControl('', Validators.compose([
				Validators.required
			])),
			email: new FormControl('', Validators.compose([
				Validators.pattern(environment.config.emailRegex),
				Validators.maxLength(environment.config.validatorsAccrossApp.emailMaxLength),
				Validators.required,
				Validators.email,
			]))
		});

		this.formSchedules = new FormGroup({});
	}

	async ngOnInit () {
		await this.getAccountDetails()
		await this.pushInfoForm()
	}

	async updatePwd () {
		var self = this
		this.loading = true
		if (!this.formPasswords.valid) {
			this.loading = false
			await self.notificationService.warningSwal(this.errorTitle, 'Toate campurile sunt obligatorii', this.errorIcon)
			return false
		} else if (this.formPasswords.value.password !== this.formPasswords.value.password_confirmation) {
			this.loading = false
			await self.notificationService.warningSwal(this.errorTitle, 'Parolele introduse nu corespund pentru actualizare', this.errorIcon)
			return false
		} else {
			self.authService.updatePasswordAccount(self.formPasswords.value)
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						console.log(response, 'response here')
						if (response.status_code == 200 && typeof response.data !== 'undefined') {

							// success
							self.loading = false
							// self.formPasswords.patchValue({
							// 	password_confirmation: '',
							// 	password: ''
							// })
							self.formPasswords.reset();
							let obj = {
								title: self.successTitle,
								message: 'Felicitari. Actualizarea parolei a fost efectuata cu succes.',
								type: self.successType
							}
							self.openToast(obj)
							return false;

						} else {
							let errorMessage = environment.config.customNotifications.generalMessages.error;
							response.errors.message.forEach(function (msg) {
								errorMessage = msg;
							})
							self.loading = false
							await self.notificationService.warningSwal(
								self.errorTitle, errorMessage, self.errorIcon
							);

							return false;
						}

					} else {
						let errorMessage = environment.config.customNotifications.generalMessages.error;
						self.loading = false
						await self.notificationService.warningSwal(
							self.errorTitle, errorMessage, self.errorIcon
						);

						return false
					}
				})
				.catch(async err => {
					self.loading = false
					let errorMessage = environment.config.customNotifications.generalMessages.error;
					await self.notificationService.warningSwal(
						self.errorTitle, errorMessage, self.errorIcon
					);
					return false
				})
		}
	}

	async pushInfoForm () {
		var self = this;

		const data = this.localStorage.getString(environment.config.userKey)
		data.then((res: any) => {

			let json = JSON.parse(res);

			self.selectedCountry = [json.user.iso_code];
			self.user.last_name = json.user.last_name;
			self.user.first_name = json.user.first_name;
			self.user.email = json.user.email;
			self.user.telefon = json.user.phone;

			self.user.cnp = json.user.cnp;
			self.user.ci_serie = json.user.ci_serie;
			self.user.ci_numar = json.user.ci_numar;

			self.user.dial_code = json.user.dial_code
			self.user.iso_code = json.user.iso_code
			self.user.international_number = json.user.international_number

			// now we need to update all the params inside the form
			self.form.patchValue({
				last_name: json.user.last_name,
				first_name: json.user.first_name,
				email: json.user.email,
				telefon: json.user.phone,
				ci_serie: json.user.ci_serie,
				ci_numar: json.user.ci_numar
			})
		})
	}

	openToast (object) {

		const { type, message, title } = object

		this.options.progressBar = true
		this.options.preventDuplicates = true
		this.options.closeButton = true

		// Clone current config so it doesn't change when ngModel updates
		const opt = cloneDeep(this.options);
		const inserted = this.toastr.show(
			message,
			title,
			opt,
			this.options.iconClasses[type]
		);
		if (inserted) {
			this.lastInserted.push(inserted.toastId);
		}
		return inserted;
	}

	async toggleForm () {
		var self = this

		if (!this.updateFormShow) {
			// we need to show the form and process it
			await this.pushInfoForm()
		}

		this.updateFormShow = !this.updateFormShow
	}

	async updateAccount () {
		var self = this

		this.loading = true;
		try {
			// process form here
			let emailReg = new RegExp(environment.config.emailRegex);
			if (!emailReg.test(this.form.value.email) || this.form.value.email.length > 70) {
				self.loading = false
				await self.notificationService.warningSwal(this.errorTitle, 'Vă rugăm să introduceți o adresă de email validă.', this.errorIcon)
				return false;
			}

			if (this.form.value.telefon == null || this.form.value.telefon == '') {
				self.loading = false
				await self.notificationService.warningSwal(this.errorTitle, 'Numarul de telefon este obligatoriu', this.errorIcon)
				return false;
			} else {

				const phoneNo = phoneNumberUtil.parseAndKeepRawInput(this.form.value.telefon.toString())
				self.phone = {
					dialCode: '',
					internationalNumber: this.form.value.telefon,
					isoCode: phoneNumberUtil.getRegionCodeForNumber(phoneNo).toLowerCase(),
					nationalNumber: phoneNo.getNationalNumber().toString()
				}

				self.phone.dialCode = this.form.value.telefon.toString().replace(self.phone.nationalNumber.toString(), '')
				self.phone.nationalNumber = (self.phone.isoCode == 'ro' ? '0' + self.phone.nationalNumber : self.phone.nationalNumber)
			}

			const dataObj = Object.assign({}, self.form.value,
				{ phone: self.phone })
			this.authService.updateInfoAccount(dataObj)
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data !== 'undefined') {

							await self.getAccountDetails()

							let obj = {
								title: self.successTitle,
								message: 'Contul dvs a fost actualizat cu succes.',
								type: self.successIcon
							}
							self.openToast(obj)
							self.toggleForm()
							self.loading = false
							return false;

						} else {
							let errorMessage = environment.config.customNotifications.generalMessages.error;
							response.errors.message.forEach(function (msg) {
								errorMessage = msg;
							})
							self.loading = false
							await self.notificationService.warningSwal(
								self.errorTitle, errorMessage, self.errorIcon
							);

							return false;
						}

					} else {
						let errorMessage = environment.config.customNotifications.generalMessages.error;
						self.loading = false
						await self.notificationService.warningSwal(
							self.errorTitle, errorMessage, self.errorIcon
						);

						return false
					}
				})
				.catch(async err => {
					self.loading = false
					let errorMessage = environment.config.customNotifications.generalMessages.error;
					await self.notificationService.warningSwal(
						self.errorTitle, errorMessage, self.errorIcon
					);

					return false
				})


		} catch (err) {
			self.loading = false
			console.log(err)
			await self.notificationService.warningSwal(this.errorTitle, 'Am întâmpinat o problemă în procesarea informațiilor dvs. Vă rugăm să reîncercați sau să reveniți mai târziu.', this.errorIcon)
		}
	}

	async clearSchedule (row) {
		let controlFromName = `day_${row.day}_from`;
		let controlToName = `day_${row.day}_to`;

		this.formSchedules.get(controlFromName).patchValue(null);
		this.formSchedules.get(controlToName).patchValue(null);
	}

	
	async submitSchedule () {
		var self = this;

		this.loading = true;

		try {
			// process form here
			this.authService.updateSchedule(this.formSchedules.value)
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data !== 'undefined') {

							await self.getAccountDetails()

							let obj = {
								title: self.successTitle,
								message: response.data,
								type: self.successIcon
							};

							self.openToast(obj)
							self.loading = false;
							return false;

						} else {
							let errorMessage = environment.config.customNotifications.generalMessages.error;
							response.errors.message.forEach(function (msg) {
								errorMessage = msg;
							})
							self.loading = false
							await self.notificationService.warningSwal(
								self.errorTitle, errorMessage, self.errorIcon
							);

							return false;
						}

					} else {
						let errorMessage = environment.config.customNotifications.generalMessages.error;
						self.loading = false
						await self.notificationService.warningSwal(
							self.errorTitle, errorMessage, self.errorIcon
						);

						return false
					}
				})
				.catch(async err => {
					self.loading = false
					let errorMessage = environment.config.customNotifications.generalMessages.error;
					await self.notificationService.warningSwal(
						self.errorTitle, errorMessage, self.errorIcon
					);

					return false
				})


		} catch (err) {
			self.loading = false
			console.log(err)
			await self.notificationService.warningSwal(this.errorTitle, 'Am întâmpinat o problemă în procesarea informațiilor dvs. Vă rugăm să reîncercați sau să reveniți mai târziu.', this.errorIcon)
		}
	}

	async getAccountDetails () {
		var self = this

		try {
			self.authService.findDetails()
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data !== 'undefined') {

							await self.localStorage.setString(environment.config.userKey, JSON.stringify(response.data))
							self.user = response.data.user;
							self.schedules = response.data.schedules;

							await self.schedules.forEach(element => {
								// add start for each day
								this.formSchedules.addControl(`day_${element.day}_from`, new FormControl(element.from, []));
								// add stop for each day
								this.formSchedules.addControl(`day_${element.day}_to`, new FormControl(element.to, []));
							});

							return false;

						} else {
							let errorMessage = environment.config.customNotifications.generalMessages.error;
							response.errors.message.forEach(function (msg) {
								errorMessage = msg;
							})
							await self.notificationService.warningSwal(
								self.errorTitle, errorMessage, self.errorIcon
							);

							return false;
						}

					} else {
						let errorMessage = environment.config.customNotifications.generalMessages.error;
						await self.notificationService.warningSwal(
							self.errorTitle, errorMessage, self.errorIcon
						);

						return false
					}
				})
				.catch(async err => {
					let errorMessage = environment.config.customNotifications.generalMessages.error;
					await self.notificationService.warningSwal(
						self.errorTitle, errorMessage, self.errorIcon
					);

					return false
				})

		} catch (err) {
			console.log(err)
			await self.notificationService.warningSwal(this.errorTitle, 'Am întâmpinat o problemă în procesarea informațiilor dvs. Vă rugăm să reîncercați sau să reveniți mai târziu.', this.errorIcon)
		}

	}

	get password () {
		return this.formPasswords.get('password');
	}

	get passwordConfirmation () {
		return this.formPasswords.get('password_confirmation');
	}

	get last_name () {
		return this.form.get('last_name');
	}

	get first_name () {
		return this.form.get('first_name');
	}

	get email () {
		return this.form.get('email');
	}

	get telefon () {
		return this.form.get('telefon');
	}

	get ci_serie () {
		return this.form.get('ci_serie');
	}

	get ci_numar () {
		return this.form.get('ci_numar');
	}
}
