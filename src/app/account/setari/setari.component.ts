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

import Swal from 'sweetalert2';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import { cloneDeep, random } from 'lodash-es';
import {
	GlobalConfig,
	ToastrService,
	ToastContainerDirective,
	ToastNoAnimation,
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

	env: any = environment

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

	// general error
	errorTitle: string = environment.config.customNotifications.headers.error
	errorIcon: string = environment.config.customNotifications.icons.error
	errorType: string = environment.config.customNotifications.icons.error
	// general success alert
	successTitle: string = environment.config.customNotifications.headers.success
	successIcon: string = environment.config.customNotifications.icons.success
	successType: string = environment.config.customNotifications.icons.success

	@ViewChild('ngxLoading') ngxLoadingComponent: NgxLoadingComponent;
	@ViewChild('customLoadingTemplate') customLoadingTemplate: TemplateRef<any>;
	public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
	public loading = false;
	public loadingTemplate: TemplateRef<any>;
	matcher = new MyErrorStateMatcher();

	hide: boolean = true
	hide_confirmation: boolean = true
	hide_current: boolean = true

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
	updateFormShow: boolean = false

	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

	selectedCountry: any = ['ro']

	phone: any = {}

	// address stuff
	updateFormShowAddress: boolean = false
	formAddress: FormGroup

	judete: any = helper.judete

	listAddresses: any = {
		domiciliu: [],
		sediu: []
	}

	constructor(
		private authService: AuthService,
		private notificationService: NotificationService,
		private localStorage: StorageService,
		public toastr: ToastrService,
		public dialog: MatDialog
	) {

		this.judete.unshift({
			id: '-1',
			name: '-- Alegeti --'
		})
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
			f_nume: new FormControl('', []),
			f_reg_com: new FormControl('', []),
			ci_serie: new FormControl('', []),
			ci_numar: new FormControl('', []),
			nume: new FormControl('', Validators.compose([
				Validators.minLength(environment.config.validatorsAccrossApp.minStringLength),
				Validators.maxLength(environment.config.validatorsAccrossApp.maxStringLength),
				Validators.required
			])),
			prenume: new FormControl('', Validators.compose([
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


		this.formAddress = new FormGroup({
			judet: new FormControl('-1', Validators.compose([
				Validators.required
			])),
			type: new FormControl('-1', Validators.compose([
				Validators.required
			])),
			oras: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(2),
				Validators.maxLength(environment.config.validatorsAccrossApp.maxStringLength),
			])),
			sector: new FormControl('-1', []),
			strada: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(2),
				Validators.maxLength(environment.config.validatorsAccrossApp.maxStringLength),
			])),
			numar: new FormControl('', Validators.compose([
				Validators.required
			])),
			bloc: new FormControl('', []),
			scara: new FormControl('', []),
			etaj: new FormControl('', []),
			apartament: new FormControl('', []),
			observatii: new FormControl('', []),
			id: new FormControl('', [])
		})
	}

	async updatePwd() {
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
			// we have a go?


			self.authService.updatePasswordAccount(self.formPasswords.value)
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						console.log(response, 'response here')
						if (response.status_code == 200 && typeof response.data !== 'undefined') {

							// success
							self.loading = false
							self.formPasswords.patchValue({
								password_confirmation: '',
								password: ''
							})
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
						// add sentry
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

	async ngOnInit() {
		await this.getAccountDetails()
		await this.listAddress()
		await this.pushInfoForm()
	}

	async pushInfoForm() {
		var self = this
		const data = this.localStorage.getString(environment.config.userKey)
		data.then((res: any) => {
			let json = JSON.parse(res)

			self.selectedCountry = [json.isocode]
			console.log(json, self.selectedCountry)
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
				self.form.patchValue({
					f_nume: json.f_nume,
					f_reg_com: json.f_reg_com
				})
				self.user.f_nume = json.f_nume
				self.user.f_reg_com = json.f_reg_com
			} else {
				self.user.f_reg_com = ''
				self.user.f_nume = ''
			}


			// now we need to update all the params inside the form
			self.form.patchValue({
				nume: json.nume,
				prenume: json.prenume,
				email: json.email,
				telefon: parseInt(json.telefon).toString(),
				ci_serie: json.ci_serie,
				ci_numar: json.ci_numar
			})

			console.log(self.user, 'check user please')
		})
	}

	openToast(object) {

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

	async toggleForm() {
		var self = this

		if (!this.updateFormShow) {
			// we need to show the form and process it
			await this.pushInfoForm()
		}

		this.updateFormShow = !this.updateFormShow
	}

	async toggleFormAddress() {
		var self = this

		if (!this.updateFormShowAddress) {
			// we need to show the form and process it
			self.formAddress.patchValue({
				judet: '-1',
				oras: '',
				type: '-1',
				sector: '-1',
				strada: '',
				numar: '',
				bloc: '',
				scara: '',
				etaj: '',
				apartament: '',
				observatii: '',
				id: ''
			})
		}

		this.updateFormShowAddress = !this.updateFormShowAddress
	}

	async updateAccount() {

		var self = this
		this.loading = true
		try {

			// process form here pls
			// updateInfoAccount
			// let phone 

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

			if (this.user.cnp.toString().length < 13 && (typeof self.form.value.f_nume == 'undefined' || self.form.value.f_nume.length < 2)) {
				// Company Required
				self.loading = false
				await self.notificationService.warningSwal(this.errorTitle, "Vă rugăm să completați câmpul 'Nume Companie'", this.errorIcon)
				return false
			}

			if (this.user.cnp.toString().length < 13 && (typeof self.form.value.f_reg_com == 'undefined' || self.form.value.f_reg_com.length < 2)) {
				// Company Required
				self.loading = false
				await self.notificationService.warningSwal(this.errorTitle, "Vă rugăm să completați câmpul 'Registrul Comertului'", this.errorIcon)
				return false
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
						// add sentry
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
			await self.notificationService.warningSwal(this.errorTitle, 'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.', this.errorIcon)
		}
	}

	async getAccountDetails() {

		var self = this

		try {
			self.authService.findDetails()
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data !== 'undefined') {


							await self.localStorage.setString(environment.config.userKey, JSON.stringify(response.data.user))
							self.user = response.data.user
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
						// add sentry
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
			await self.notificationService.warningSwal(this.errorTitle, 'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.', this.errorIcon)
		}

	}

	async addAddress() {

		console.log(this.formAddress.value)

		var self = this
		this.loading = true
		try {

			// process form here pls
			// updateInfoAccount
			// let phone 

			this.authService.addressSave(self.formAddress.value)
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
							self.toggleFormAddress()
							self.loading = false
							self.listAddress()
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
						// add sentry
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
			await self.notificationService.warningSwal(this.errorTitle, 'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.', this.errorIcon)
		}

	}

	async listAddress() {
		var self = this

		try {
			self.authService.addressList()
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data !== 'undefined') {
							self.listAddresses = response.data
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
						// add sentry
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
			await self.notificationService.warningSwal(this.errorTitle, 'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.', this.errorIcon)
		}
	}

	async deleteAddress(row) {
		console.log(row)

		var self = this
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn btn-success',
				cancelButton: 'btn btn-danger'
			},
			buttonsStyling: false
		});

		swalWithBootstrapButtons.fire({
			title: 'Sunteti sigur?',
			text: 'Actiune ireversibila',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Confirm',
			cancelButtonText: 'Anulati',
			reverseButtons: true
		}).then((result) => {
			if (result.value) {

				// please proceed with the success, HTTP request
				try {
					self.authService.addressDelete(row.id)
						.then(async (res) => {
							let response = (typeof res.status_code !== 'undefined' ? res : res.error)
							if (typeof response.status_code !== 'undefined') {
								if (response.status_code == 200 && typeof response.data !== 'undefined') {

									self.listAddress()
									swalWithBootstrapButtons.fire(
										'Succes',
										'Adresa mentionata a fost stearsa',
										'success'
									);
									return false

								} else {
									let errorMessage = environment.config.customNotifications.generalMessages.error;
									response.errors.message.forEach(function (msg) {
										errorMessage = msg;
									})
									// await self.notificationService.warningSwal(
									// 	self.errorTitle, errorMessage, self.errorIcon
									// );
									swalWithBootstrapButtons.fire(
										'Am intampinat o eroare!',
										errorMessage,
										'error'
									);
									return false;
								}

							} else {
								// add sentry
								let errorMessage = environment.config.customNotifications.generalMessages.error;
								// await self.notificationService.warningSwal(
								// 	self.errorTitle, errorMessage, self.errorIcon
								// );
								swalWithBootstrapButtons.fire(
									'Am intampinat o eroare!',
									errorMessage,
									'error'
								);
								return false
							}
						})
						.catch(async err => {
							let errorMessage = environment.config.customNotifications.generalMessages.error;
							// await self.notificationService.warningSwal(
							// 	self.errorTitle, errorMessage, self.errorIcon
							// );
							
							swalWithBootstrapButtons.fire(
								'Am intampinat o eroare!',
								errorMessage,
								'error'
							);
							return false
						})

				} catch (err) {
					console.log(err)
					self.notificationService.warningSwal(this.errorTitle, 'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.', this.errorIcon)

					swalWithBootstrapButtons.fire(
						'Am intampinat o eroare!',
						'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.',
						'error'
					);
					return false
				}
			} else if (
				/* Read more about handling dismissals below */
				result.dismiss === Swal.DismissReason.cancel
			) {
				swalWithBootstrapButtons.fire(
					'Anulat',
					'Adresa mentionata nu a fost stearsa',
					'error'
				);
			}
		});
	}

	updateFormAddress (row) {
		console.log(row)
		var self = this
		self.formAddress.patchValue({
			judet: row.judet.toString(),
			oras: row.oras,
			type: row.type.toString(),
			sector: row.sector.toString(),
			strada: row.strada,
			numar: row.numar,
			bloc: row.bloc,
			scara: row.scara,
			etaj: row.etaj,
			apartament: row.apartament,
			observatii: row.observatii,
			id: row.id
		})
		this.updateFormShowAddress = true
	}

	// settings form
	get password() {
		return this.formPasswords.get('password');
	}

	get passwordConfirmation() {
		return this.formPasswords.get('password_confirmation');
	}

	get nume() {
		return this.form.get('nume');
	}

	get prenume() {
		return this.form.get('prenume');
	}

	get email() {
		return this.form.get('email');
	}

	get telefon() {
		return this.form.get('telefon');
	}

	get ci_serie() {
		return this.form.get('ci_serie');
	}

	get ci_numar() {
		return this.form.get('ci_numar');
	}

	// address form

	get type() {
		return this.formAddress.get('type');
	}

	get judet() {
		return this.formAddress.get('judet');
	}

	get oras() {
		return this.formAddress.get('oras');
	}

	get strada() {
		return this.formAddress.get('strada');
	}

	get numar() {
		return this.formAddress.get('numar');
	}


}
