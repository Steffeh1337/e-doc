import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { environment } from '../../../environments/environment'


import { ErrorStateMatcher } from '@angular/material/core';

import { AuthService } from '../auth.service'

import { NotificationService } from '../../general/notification.service'

import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';

import { StorageService } from '../../general/storage.service'

import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS, StepperSelectionEvent } from '@angular/cdk/stepper';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

import { cloneDeep, random } from 'lodash-es';
import {
	GlobalConfig,
	ToastrService,
	ToastContainerDirective,
	ToastNoAnimation,
} from 'ngx-toastr';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.sass'],
	providers: [
		{ provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false } }

	]
})
export class ForgotPasswordComponent implements OnInit {

	env: any = environment

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
	token : string = ''

	formEmail: FormGroup;
	formCode: FormGroup;
	formPasswords: FormGroup;

	phone_no: string = ''

	isLinear = true;

	firstStep: boolean = true
	firstStepComplete: boolean = false
	successSteps: boolean = false

	disableRipple: boolean = true

	@ViewChild('stepper', { static: false }) private stepper: MatStepper;

	constructor(
		private authService: AuthService,
		private notificationService: NotificationService,
		private localStorage: StorageService,
		public toastr: ToastrService,
		public dialog: MatDialog
	) {

		this.options = this.toastr.toastrConfig;

		this.formEmail = new FormGroup({
			email: new FormControl('', Validators.compose([
				Validators.required,
				Validators.pattern(environment.config.emailRegex),
				Validators.email,
			]))
		});

		this.formCode = new FormGroup({
			code: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(5)
			]))
		})

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
	}

	get email() {
		return this.formEmail.get('email');
	}

	get codeInput() {
		return this.formCode.get('code');
	}

	get password() {
		return this.formPasswords.get('password');
	}

	get passwordConfirmation() {
		return this.formPasswords.get('password_confirmation');
	}

	ngOnInit(): void {
	}

	goBack(index) {
		this.stepper.previous();
	}

	goForward(index) {
		console.log(index)
		
		var self = this
		switch (index) {

			case 1:
				return self.checkEmail()
				break;

			case 2:
				return self.confirmCode()
				break;

			case 3:
				return self.updatePwd()
				break;
		}
		// this.stepper.next();
	}

	async checkEmail() {
		var self = this
		if (!this.formEmail.valid) {
			self.loading = false
			await self.notificationService.warningSwal(this.errorTitle, 'Email-ul introdus nu este valid', this.errorIcon)
			return false;
		} else {
			this.authService.checkEmailPasswordReset(this.formEmail.value)
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						console.log(response, 'response here')
						if (response.status_code == 200 && typeof response.data !== 'undefined') {

							// success
							self.stepper.next()
							self.phone_no = response.data.phone

							self.loading = false
							return false;

						} else {
							let errorMessage = environment.config.customNotifications.generalMessages.error;
							response.errors.message.forEach(function (msg) {
								errorMessage = msg;
							})
							console.log(self.errorTitle, 'alert here??')
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

	async resendCode() {
		var self = this
		if (!this.formEmail.valid) {
			self.loading = false
			await self.notificationService.warningSwal(this.errorTitle, 'Emailul introdus nu este valid', this.errorIcon)
			return false;
		} else {

			if (self.allowResendSMS) {

				self.authService.resendCodePasswordReset(self.formEmail.value)
					.then(async (res) => {
						let response = (typeof res.status_code !== 'undefined' ? res : res.error)
						if (typeof response.status_code !== 'undefined') {
							console.log(response, 'response here')
							if (response.status_code == 200 && typeof response.data !== 'undefined') {

								// success
								self.stepper.next()
								self.phone_no = response.data.phone

								self.loading = false

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

								return false;

							} else {
								let errorMessage = environment.config.customNotifications.generalMessages.error;
								response.errors.message.forEach(function (msg) {
									errorMessage = msg;
								})
								console.log(self.errorTitle, 'alert here??')
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

	}

	async confirmCode() {
		var self = this

		if (!this.formEmail.valid) {
			await self.notificationService.warningSwal(this.errorTitle, 'Emailul introdus nu este valid', this.errorIcon)
			return false
		} else if (!this.formCode.valid) {
			await self.notificationService.warningSwal(this.errorTitle, 'Va rugam sa completati codul primit prin sms', this.errorIcon)
			return false
		} else {
			// success here???
			self.authService.verifyCodePasswordReset({
				email: self.formEmail.value.email,
				code: self.formCode.value.code
			})
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						console.log(response, 'response here')
						if (response.status_code == 200 && typeof response.data !== 'undefined' && typeof response.data.token !== 'undefined') {

							// success
							self.stepper.next()
							self.token = response.data.token
							self.firstStepComplete = true

							self.loading = false

							self.allowResendSMS = false
							let obj = {
								title: self.successTitle,
								message: 'Codul confirmat cu succes. Va rugam sa introduceti parola dorita',
								type: self.successType
							}
							self.openToast(obj)
							return false;

						}else {
							let errorMessage = environment.config.customNotifications.generalMessages.error;
							response.errors.message.forEach(function (msg) {
								errorMessage = msg;
							})
							console.log(self.errorTitle, 'alert here??')
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

	async updatePwd() {
		var self = this
		if (!this.formEmail.valid) {
			await self.notificationService.warningSwal(this.errorTitle, 'Emailul introdus nu este valid', this.errorIcon)
			return false
		} else if (!this.formCode.valid) {
			await self.notificationService.warningSwal(this.errorTitle, 'Va rugam sa completati codul primit prin sms', this.errorIcon)
			return false
		} else if(this.token == null || this.token == '') {
			await self.notificationService.warningSwal(this.errorTitle, 'Codul transmis nu este corect. Va rugam sa reincercati.', this.errorIcon)
			return false
		}else {
			// proceed to update passwords
			let dataObj = Object.assign({}, self.formPasswords.value,
				{token: self.token, code: self.formCode.value.code, email: self.formEmail.value.email})

				
			self.authService.updatePasswordReset(dataObj)
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						console.log(response, 'response here')
						if (response.status_code == 200 && typeof response.data !== 'undefined') {

							// success
							self.stepper.next()
							self.loading = false
							let obj = {
								title: self.successTitle,
								message: 'Felicitari. Actualizarea parolei a fost efectuata cu succes.',
								type: self.successType
							}
							self.openToast(obj)
							return false;

						}else {
							let errorMessage = environment.config.customNotifications.generalMessages.error;
							response.errors.message.forEach(function (msg) {
								errorMessage = msg;
							})
							console.log(self.errorTitle, 'alert here??')
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
}
