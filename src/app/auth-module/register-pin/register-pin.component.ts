import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { environment } from '../../../environments/environment'

import { ErrorStateMatcher } from '@angular/material/core';

import { AuthService } from '../auth.service'
import { NotificationService } from '../../general/notification.service'

import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PhoneNumberUtil, PhoneNumber } from 'google-libphonenumber'
const phoneNumberUtil = PhoneNumberUtil.getInstance();

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
import { ControlsModule } from 'src/app/DemoPages/Forms/Elements/controls/controls.module';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
	selector: 'app-register-pin',
	templateUrl: './register-pin.component.html',
	styleUrls: ['./register-pin.component.sass']
})
export class RegisterPinComponent implements OnInit {

	env: any = environment

	heading = 'Modals';
	subheading = 'Wide selection of modal dialogs styles and animations available.';
	icon = 'pe-7s-phone icon-gradient bg-premium-dark';

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

	private lastInserted: number[] = [];
	options: GlobalConfig;
	allowResendSMS: boolean = true
	token: string = ''

	form: FormGroup;
	formCode: FormGroup;
	formPIN: FormGroup;

	phone_no: string = ''

	step: number = -1
	id_ticket: number = null
	id_cetatean: number = null

	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

	constructor(
		private authService: AuthService,
		private notificationService: NotificationService,
		public toastr: ToastrService,
		private modalService: NgbModal
	) {
		this.options = this.toastr.toastrConfig;

		this.form = new FormGroup({
			f_nume: new FormControl('', []),
			f_reg_com: new FormControl('', []),
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
			telefon: new FormControl('', []),
			email: new FormControl('', Validators.compose([
				Validators.pattern(environment.config.emailRegex),
				Validators.maxLength(environment.config.validatorsAccrossApp.emailMaxLength),
				Validators.required,
				Validators.email,
			])),
			password: new FormControl('', Validators.compose([
				Validators.minLength(environment.config.validatorsAccrossApp.minPassword),
				Validators.maxLength(environment.config.validatorsAccrossApp.maxPassword),
				Validators.required
			])),
			password_confirmation: new FormControl('', Validators.compose([
				Validators.minLength(environment.config.validatorsAccrossApp.minPassword),
				Validators.maxLength(environment.config.validatorsAccrossApp.maxPassword),
				Validators.required
			])),
			termeni_conditii: new FormControl(false, Validators.compose([
				Validators.requiredTrue
			])),
			cnp: new FormControl('', [
				Validators.minLength(4),
				Validators.maxLength(13),
				Validators.required
			]),
			id_inrolare: new FormControl('', []),
		});

		this.formCode = new FormGroup({
			code: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(5)
			]))
		})

		this.formPIN = new FormGroup({
			pin: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(8),
				Validators.maxLength(8)
			])),
			cnp_cui: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(2),
				Validators.maxLength(13)
			]))
		})

	}
	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

	get email() {
		return this.form.get('email');
	}

	get codeInput() {
		return this.formCode.get('code');
	}

	get password() {
		return this.form.get('password');
	}

	get passwordConfirmation() {
		return this.form.get('password_confirmation');
	}

	get prenume() {
		return this.form.get('prenume');
	}

	get nume() {
		return this.form.get('nume');
	}

	get telefon() {
		return this.form.get('telefon');
	}

	get phoneNumber() {
		return this.form.get('phoneNumber');
	}

	get cnp() {
		return this.form.get('cnp');
	}

	get pin() {
		return this.formPIN.get('pin');
	}

	get cnpPIN() {
		return this.formPIN.get('cnp_cui');
	}


	ngOnInit(): void {
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

	async checkPIN () {
		// just to prepare the loader
		this.toggleTemplate()

		// we need to start first
		this.loading = true
		var self = this;

		try {

			if (!this.formPIN.valid) {
				self.loading = false
				await self.notificationService.warningSwal(this.errorTitle, 'Va rugam sa completati toate campurile', this.errorIcon)
				return false;
			} else {
				// success
				if (this.formPIN.value.cnp_cui == null || this.formPIN.value.cnp_cui.toString().length < 3 || this.formPIN.value.cnp_cui.toString().length > 13) {
					self.loading = false
					await self.notificationService.warningSwal(this.errorTitle, "Campul CNP/CUI este obligatoriu", this.errorIcon)
					return false
				}

				if (this.formPIN.value.pin == null || this.formPIN.value.pin.toString().length < 8 || this.formPIN.value.pin.toString().length > 8) {
					self.loading = false
					await self.notificationService.warningSwal(this.errorTitle, "Campul PIN este obligatoriu, si trebuie sa fie de 8 caractere", this.errorIcon)
					return false
				}


				this.authService.checkPinRegister(this.formPIN.value)
					.then(async (res) => {
						let response = (typeof res.status_code !== 'undefined' ? res : res.error)
						if (typeof response.status_code !== 'undefined') {
							if (response.status_code == 200 && typeof response.data !== 'undefined') {

								self.loading = false

								let obj = {
									title: self.successTitle,
									message: 'Contul dvs a fost identificat. Vă rugăm să verificați/completați datele afișate și să confirmați înregistrarea contului dvs.',
									type: self.successIcon
								}
								self.openToast(obj)

								self.form.patchValue({
									nume: response.data.nume,
									prenume: response.data.prenume,
									cnp: response.data.cnp,
									telefon: response.data.telefon,
									email: response.data.email,
									f_nume: response.data.f_nume,
									f_reg_com: response.data.f_reg_com,
									id_inrolare: response.data.id_inrolare
								})
								// self.id_cetatean = response.data.id_cet
								// self.id_ticket = response.data.id
								// self.phone_no = response.data.phone_no

								console.log(response)
								this.step = 0
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

		} catch (err) {
			self.loading = false
			console.log(err)
			await self.notificationService.warningSwal(this.errorTitle, 'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.', this.errorIcon)
		}


	}
	async store() {
		// just to prepare the loader
		this.toggleTemplate()

		// we need to start first
		this.loading = true
		var self = this;
		var phone

		try {

			if (!this.form.valid) {
				self.loading = false
				await self.notificationService.warningSwal(this.errorTitle, 'Va rugam sa completati toate campurile', this.errorIcon)
				return false;
			} else {
				// now proceed with the actual validation

				// validate passwords
				if (this.form.value.password == '' || this.form.value.password.length < 7 || this.form.value.password.length > 30) {
					self.loading = false
					await self.notificationService.warningSwal(this.errorTitle, 'Parola introdusă trebuie sa fie între 8 și 30 de caractere.', this.errorIcon)
					return false;
				}

				if (this.form.value.password_confirmation == '' || this.form.value.password_confirmation.length < 7 || this.form.value.password_confirmation.length > 30) {
					self.loading = false
					await self.notificationService.warningSwal(this.errorTitle, 'Parola de confirmare introdusă trebuie sa fie între 8 și 30 de caractere.', this.errorIcon)
					return false;
				}

				if (this.form.value.password !== this.form.value.password_confirmation) {
					self.loading = false
					await self.notificationService.warningSwal(this.errorTitle, 'Parolele introduse nu sunt la fel. Vă rugăm să verificați parolele introduse.', this.errorIcon)
					return false;
				}

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
					phone = {
						dialCode: '',
						internationalNumber: this.form.value.telefon,
						isoCode: phoneNumberUtil.getRegionCodeForNumber(phoneNo).toLowerCase(),
						nationalNumber: phoneNo.getNationalNumber().toString()
					}

					phone.dialCode = this.form.value.telefon.toString().replace(phone.nationalNumber.toString(), '')
					phone.nationalNumber = (phone.isoCode == 'ro' ? '0' + phone.nationalNumber : phone.nationalNumber)

				}

				if (this.form.value.cnp == null || this.form.value.cnp.toString().length < 3 || this.form.value.cnp.toString().length > 13) {
					self.loading = false
					await self.notificationService.warningSwal(this.errorTitle, "Campul CNP/CUI este obligatoriu", this.errorIcon)
				}

				let lengthCI = this.form.value.cnp.toString().length
				switch (true) {

					case (lengthCI < 13):
						// possible CUI
						if (typeof self.form.value.f_nume == 'undefined' || self.form.value.f_nume.length < 2) {
							// Company Required
							self.loading = false
							await self.notificationService.warningSwal(this.errorTitle, "Vă rugăm să completați câmpul 'Nume Companie'", this.errorIcon)
							return false
						}
						break;

					case (lengthCI > 13):
						// other kind of scenarios
						self.loading = false
						await self.notificationService.warningSwal(this.errorTitle, "CI/CUI introdus este invalid", this.errorIcon)
						return false;
						break;

					default:
						// do nothing pls
						break;
				}

				const dataObj = Object.assign({}, self.form.value,
					{ phone: phone })

				this.authService.registerAccount(dataObj)
					.then(async (res) => {
						let response = (typeof res.status_code !== 'undefined' ? res : res.error)
						if (typeof response.status_code !== 'undefined') {
							if (response.status_code == 200 && typeof response.data !== 'undefined') {

								self.loading = false

								let obj = {
									title: self.successTitle,
									message: 'Contul dvs a fost înregistrat. Verificarea numărului de telefon prin cod este obligatorie. Codul pin prin sms a fost trimis.',
									type: self.successIcon
								}
								self.openToast(obj)

								self.id_cetatean = response.data.id_cet
								self.id_ticket = response.data.id
								self.phone_no = response.data.phone_no

								this.step = 1
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

		} catch (err) {
			self.loading = false
			console.log(err)
			await self.notificationService.warningSwal(this.errorTitle, 'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.', this.errorIcon)
		}
	}

	toggleTemplate(): void {
		if (this.loadingTemplate) {
			this.loadingTemplate = null;
		} else {
			this.loadingTemplate = this.customLoadingTemplate;
		}
	}

	resendCode() {
		var self = this

		if (self.allowResendSMS) {
			self.authService.resendCode({ id: self.id_cetatean })
				.then(async res => {
					// check if success
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data !== 'undefined') {
							// success
							self.allowResendSMS = false
							let obj = {
								title: self.successTitle,
								message: 'Cod-ul a fost retrimis prin SMS',
								type: self.successType
							}
							self.openToast(obj)

							setTimeout(() => {
								self.allowResendSMS = true
							}, 6000)

							return false

						} else {
							// error
							response.errors.message.forEach(function (msg) {
								let obj = {
									title: self.errorTitle,
									message: msg,
									type: self.errorType
								}
								self.openToast(obj)
							})

							return false
						}
					} else {
						// general error
						let errorMessage = environment.config.customNotifications.generalMessages.error;
						self.loading = false
						let obj = {
							title: self.errorTitle,
							message: errorMessage,
							type: self.errorType
						}
						self.openToast(obj)
						return false
					}

				})
				.catch(async err => {
					let errorMessage = environment.config.customNotifications.generalMessages.error;
					self.loading = false
					let obj = {
						title: self.errorTitle,
						message: errorMessage,
						type: self.errorType
					}
					self.openToast(obj)
					return false
				});

		} else {
			let obj = {
				title: self.errorTitle,
				message: 'Puteti trimite urmatorul cod prin sms in cca 1 minut',
				type: self.errorType
			}
			self.openToast(obj)
			return false
		}
	}

	async confirmCode() {
		var self = this

		if (!this.form.valid) {
			await self.notificationService.warningSwal(this.errorTitle, 'Va rugam sa completati codul primit prin sms.', this.errorIcon)
			return false
		} else {
			// we have a valid form
			self.authService.confirmCode({ id: self.id_cetatean, code: self.formCode.value.code })
				.then(async res => {
					// check if success
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data !== 'undefined') {
							// success
							this.step = 2
							return false

						} else {
							// error
							response.errors.message.forEach(function (msg) {
								let obj = {
									title: self.errorTitle,
									message: msg,
									type: self.errorType
								}
								self.openToast(obj)
							})

							return false
						}
					} else {
						// general error
						let errorMessage = environment.config.customNotifications.generalMessages.error;
						self.loading = false
						let obj = {
							title: self.errorTitle,
							message: errorMessage,
							type: self.errorType
						}
						self.openToast(obj)
						return false
					}

				})
				.catch(async err => {
					let errorMessage = environment.config.customNotifications.generalMessages.error;
					self.loading = false
					let obj = {
						title: self.errorTitle,
						message: errorMessage,
						type: self.errorType
					}
					self.openToast(obj)
					return false
				});
		}

	}

}
