import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { AuthService } from '../../auth.service'

import { environment } from '../../../../environments/environment'
import { NotificationService } from '../../../general/notification.service'

import { cloneDeep, random } from 'lodash-es';
import {
	GlobalConfig,
	ToastrService,
	ToastContainerDirective,
	ToastNoAnimation,
} from 'ngx-toastr';

export interface DialogData {
	email: string,
	phone_no: string;
	id_cetatean: number;
	inputFormat: string
}

@Component({
	selector: 'app-check-code',
	templateUrl: './check-code.component.html',
	styleUrls: ['./check-code.component.sass']
})
export class CheckCodeComponent implements OnInit {

	// general error
	errorTitle: string = environment.config.customNotifications.headers.error
	errorIcon: string = environment.config.customNotifications.icons.error
	errorType: string = 'error'

	// general success alert
	successTitle: string = environment.config.customNotifications.headers.success
	successIcon: string = environment.config.customNotifications.icons.success
	successType: string = 'success'

	email: string;
	phone_no: string;
	code: string;
	inputFormat: string;

	id_cetatean: number = null;

	form: FormGroup;
	public loading = false;

	private lastInserted: number[] = [];

	options: GlobalConfig;

	allowResendSMS: boolean = true

	constructor(
		public dialogRef: MatDialogRef<CheckCodeComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData,
		private authService: AuthService,
		public toastr: ToastrService,
		private notificationService: NotificationService
	) {

		this.options = this.toastr.toastrConfig;

		dialogRef.disableClose = true

		this.form = new FormGroup({
			code: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(5)
			]))
		});
	}

	ngOnInit(): void {
	}

	onNoClick(): void {
		this.dialogRef.close()
	}

	// resend code here
	async resendCode() {

		var self = this

		if (self.allowResendSMS) {
			self.authService.resendCode({ id: self.data.id_cetatean, format: self.data.inputFormat })
				.then(async res => {
					// check if success
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data !== 'undefined') {
							// success
							self.allowResendSMS = false
							let obj = {
								title: self.successTitle,
								message: 'Cod-ul a fost retrimis prin ' + self.data.inputFormat,
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
				message: 'Puteti trimite urmatorul cod prin ' + self.data.inputFormat + ' in cca 1 minut',
				type: self.errorType
			}
			self.openToast(obj)
			return false
		}
	}

	async confirmCode() {
		var self = this

		if(!this.form.valid) {
			await self.notificationService.warningSwal(this.errorTitle, 'Va rugam sa completati codul primit prin ' + self.data.inputFormat, this.errorIcon)
			return false
		}else {
			// we have a valid form
			self.authService.confirmCode({ id: self.data.id_cetatean, code: self.form.value.code, format: self.data.inputFormat })
				.then(async res => {
					// check if success
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data !== 'undefined') {
							// success
							self.dialogRef.close(1)
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

	get codeInput() {
		return this.form.get('code');
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
