import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { environment } from '../../../environments/environment'

import { ErrorStateMatcher } from '@angular/material/core';

import { AuthService } from '../auth.service'

import { NotificationService } from '../../general/notification.service'

import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';

import { StorageService } from '../../general/storage.service'

import { MatDialog } from '@angular/material/dialog';

import { CheckCodeComponent } from '../dialogs/check-code/check-code.component'

import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

	env : any = environment
	
	// general error
	errorTitle: string = environment.config.customNotifications.headers.error
	errorIcon: string = environment.config.customNotifications.icons.error
	// general success alert
	successTitle: string = environment.config.customNotifications.headers.success
	successIcon: string = environment.config.customNotifications.icons.success

	@ViewChild('ngxLoading') ngxLoadingComponent: NgxLoadingComponent;
	@ViewChild('customLoadingTemplate') customLoadingTemplate: TemplateRef<any>;
	public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
	public loading = false;
	public loadingTemplate: TemplateRef<any>;
	matcher = new MyErrorStateMatcher();

	form: FormGroup;
	passwordType: string = 'password';
	passwordIcon: string = 'eye-off';

	public id_cetatean: any = null;
	public phone_no : string = null;

	hide: boolean = true

	constructor(
		private authService: AuthService,
		private notificationService: NotificationService,
		private localStorage: StorageService,
		public dialog: MatDialog,
		private router : Router
	) {
		this.form = new FormGroup({
			email: new FormControl('', Validators.compose([
				Validators.required,
				Validators.pattern(environment.config.emailRegex),
				Validators.email,
			])),
			password: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(environment.config.validatorsAccrossApp.minPassword),
				Validators.maxLength(environment.config.validatorsAccrossApp.maxPassword)
			])),
			saveme: new FormControl(false)
		})

	}

	async ngOnInit() {

		var self = this
		// check credentials saved
		const isTrue = await self.localStorage.getString(environment.config.storageKey + 'saveme')
		if (isTrue) {
			// get email
			const emailValue = self.localStorage.getString(environment.config.storageKey + 'email')
			emailValue.then(data => {
				self.form.patchValue({
					email: data
				})
			})

			// get password
			const passwordValue = self.localStorage.getString(environment.config.storageKey + 'password')
			passwordValue.then(data => {
				self.form.patchValue({
					password: data
				})
			})
			// patch checkbox
			self.form.patchValue({
				saveme: true
			})
		}
	}

	toggleTemplate(): void {
		if (this.loadingTemplate) {
			this.loadingTemplate = null;
		} else {
			this.loadingTemplate = this.customLoadingTemplate;
		}
	}

	showLoader() {
		this.loading = !this.loading
	}

	get email() {
		return this.form.get('email');
	}

	get password() {
		return this.form.get('password');
	}

	get saveme() {
		return this.form.get('saveme');
	}

	async onSubmit() {

		console.log('login??')
		this.loading = true
		var self = this;
		if (!this.form.valid) {
			self.loading = false
			await self.notificationService.warningSwal(this.errorTitle, 'Va rugam sa completati toate campurile.', this.errorIcon)
			return false;
		} else if (this.form.value.saveme) {
			// add to storage
			await self.localStorage.setString(environment.config.storageKey + "saveme", "true")
			await self.localStorage.setString(environment.config.storageKey + "email", this.form.value.email)
			await self.localStorage.setString(environment.config.storageKey + "password", this.form.value.password)
		} else if (!this.form.value.saveme) {
			// remove from storage
			await self.localStorage.removeItem(environment.config.storageKey + "saveme")
			await self.localStorage.removeItem(environment.config.storageKey + "email");
			await self.localStorage.removeItem(environment.config.storageKey + "password");
		}


		this.authService.login(this.form.value)
			.then(async (res) => {
				let response = (typeof res.status_code !== 'undefined' ? res : res.error)
				if (typeof response.status_code !== 'undefined') {
					if (response.status_code == 200 && typeof response.data.token !== 'undefined' && response.code_validation == 0) {
                        console.log('auth?')
						// everything ok now, we wrap it up now
						self.authService.setToken(response.data.token)
						await self.localStorage.setString(environment.config.tokenKey, response.data.token)
						await self.localStorage.setString(environment.config.userKey, JSON.stringify(response.data.user))
						
						// redirect to /dashboard/main
						// set authenticated and redirect
						self.loading = false
						setTimeout(function() {
                            console.log('auth? 2')
							self.authService.setAuthenticatedNext(true);
							self.router.navigateByUrl('dashboard/main', { replaceUrl: true })
						}, 200)

					} else if (response.code_validation == 1) {
						// get phone verification
						response.errors.message.forEach(function (msg) {
							self.notificationService.warningSwal(
								self.errorTitle, msg, self.errorIcon
							);
						})

						self.id_cetatean = response.id
						self.phone_no = response.phone_no
						// # de reactivat
						self.loading = false
						self.resendCodeAndOpenModal('sms')
						return false
					} else if (response.code_validation == 2) {
						// get phone verification
						response.errors.message.forEach(function (msg) {
							self.notificationService.warningSwal(
								self.errorTitle, msg, self.errorIcon
							);
						})

						self.id_cetatean = response.id
						// # de reactivat
						self.loading = false
						self.resendCodeAndOpenModal('email')
						return false
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

	openDialog(): void {
		const dialogRef = this.dialog.open(CheckCodeComponent, {
			width: '400px',
			data: { phone_no: 'xxxx072' }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result)
		}, (err) => {
			console.log(err, 'err')
		});
	}

	resendCodeAndOpenModal(inputFormat) {
		var self = this
		self.authService.resendCode({ id: self.id_cetatean, format: inputFormat })
			.then(async res => {
				// check if success
				let response = (typeof res.status_code !== 'undefined' ? res : res.error)
				if (typeof response.status_code !== 'undefined') {
					if (response.status_code == 200) {
						// success
						// on success.. please open the modal
						const dialogRef = this.dialog.open(CheckCodeComponent, {
							width: '400px',
							data: { phone_no: self.phone_no, id_cetatean: self.id_cetatean, inputFormat }
						});
				
						dialogRef.beforeClosed().subscribe(res => {
							if(res === 1) {
								// we have a success, please show swal with relogin pls.
								self.notificationService.warningSwal(
									self.successTitle, 'Contul a fost validat cu succes. Va rugam sa va autentificati.', self.successIcon
								);
							}
						})
						return false

					} else {
						// error
						response.errors.message.forEach(function (msg) {
							self.notificationService.warningSwal(
								self.errorTitle, msg, self.errorIcon
							);
						})

						return false
					}
				} else {
					// general error
					let errorMessage = environment.config.customNotifications.generalMessages.error;
					self.loading = false
					await self.notificationService.warningSwal(
						self.errorTitle, errorMessage, self.errorIcon
					);
					return false
				}

			})
			.catch(async err => {
				let errorMessage = environment.config.customNotifications.generalMessages.error;
				self.loading = false
				await self.notificationService.warningSwal(
					self.errorTitle, errorMessage, self.errorIcon
				);
				return false
			});
	}
}
