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

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

	uploading: any = {
		file_ci: false,
		file_cui: false
	}

	files: any = {
		file_ci: [],
		file_cui: []
	}

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

	phone_no: string = ''

	step: number = 0
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
			file_ci: new FormControl('', []),
			file_ci_source: new FormControl('', Validators.compose([
				Validators.required
			])),
			file_cui: new FormControl('', []),
			file_cui_source: new FormControl('', [])
		});

		this.formCode = new FormGroup({
			code: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(5)
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
					case (lengthCI == 13):
						// classic CI
						// please check value of CI
						if (typeof self.form.value.file_ci_source == 'undefined' || self.form.value.file_ci_source == '') {
							// CI Document Required
							self.loading = false
							await self.notificationService.warningSwal(this.errorTitle, "Vă rugăm să atașați o copie CI", this.errorIcon)
							return false
						}
						break;

					case (lengthCI < 13):
						// possible CUI
						if (typeof self.form.value.f_nume == 'undefined' || self.form.value.f_nume.length < 2) {
							// Company Required
							self.loading = false
							await self.notificationService.warningSwal(this.errorTitle, "Vă rugăm să completați câmpul 'Nume Companie'", this.errorIcon)
							return false
						} else if (typeof self.form.value.file_cui_source == 'undefined' || self.form.value.file_cui_source == '') {
							// CUI Document Required
							self.loading = false
							await self.notificationService.warningSwal(this.errorTitle, "Va rugăm să atașați o copie CUI", this.errorIcon)
							return false
						} else if (typeof self.form.value.file_ci_source == 'undefined' || self.form.value.file_ci_source == '') {
							// CI Document Required
							self.loading = false
							await self.notificationService.warningSwal(this.errorTitle, "Vă rugăm să atașați o copie CI", this.errorIcon)
							return false
						}
						break;

					case (lengthCI > 13):
						// other kind of scenarios
						self.loading = false
						await self.notificationService.warningSwal(this.errorTitle, "CI/CUI introdus este invalid", this.errorIcon)
						return false;
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

	openInfo(content) {
		this.modalService.open(content, { centered: false, size: 'lg' });
	}

	fileChangeEvent(ev) {
		console.log(ev, 'check here pls')
	}

	clearInputFile(key) {

		let obj = {}
		obj[key + '_source'] = ''
		this.form.patchValue(obj)
		this.files[key] = []
	}

	upload(files, key) {
		var self = this
		const file = files[0];
		const formData = new FormData();
		formData.append('file', file, file.name);

		this.uploading[key] = true;
		self.files[key] = []

		return this.authService.fileUpload(formData)
			.then((result) => {

				self.files[key].push(result.data)
				self.form.get(key + '_source').setValue(JSON.stringify(self.files[key]));

				self.uploading[key] = false;

				let obj = {
					title: self.successTitle,
					message: 'Fisierul dvs a fost adaugat cu succes.',
					type: self.successIcon
				}
				self.openToast(obj)

			})
			.catch((err) => {
				self.uploading[key] = false;
				console.log(err, 'err')
				// show error.. on toast

				let obj = {
					title: self.errorTitle,
					message: 'Ne pare rau, dar fisierul dumneavoastra nu a putut fi incarcat. Va rugam sa reincercati!',
					type: self.errorIcon
				}
				self.openToast(obj)
			});
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
