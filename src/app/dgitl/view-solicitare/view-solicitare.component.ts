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
import Swal from 'sweetalert2';
import { helper } from '../../../environments/helper'
import { DgitlService } from '../dgitl.service'
import { StorageService } from '../../general/storage.service'

import { MatDialog } from '@angular/material/dialog';

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
import { ControlsModule } from 'src/app/DemoPages/Forms/Elements/controls/controls.module';
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-view-solicitare',
	templateUrl: './view-solicitare.component.html',
	styleUrls: ['./view-solicitare.component.sass']
})
export class ViewSolicitareComponent implements OnInit {

	options: GlobalConfig;

	solicitareId: any

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

	faStar = faStar;
	faPlus = faPlus;
	faAngleDown = faAngleDown;
	faSearch = faSearch;
	faTags = faTags;
	faCalendarAlt = faCalendarAlt;

	loaded: number = 0
	solicitare: any = []
	istoric: any = []

	form: FormGroup

	uploading: any = {
		documents: false
	}
	files: any = {
		documents: []
	}
	private lastInserted: number[] = [];

	constructor(
		private route: ActivatedRoute,
		private dgitlService: DgitlService,
		private notificationService: NotificationService,
		private localStorage: StorageService,
		public toastr: ToastrService,
		public dialog: MatDialog,
		private authService: AuthService
	) {

		this.form = new FormGroup({
			content: new FormControl('', Validators.compose([
				Validators.required
			])),
			documents: new FormControl('', []),
			documents_source: new FormControl('', []),
		});
	}

	ngOnInit(): void {
		this.solicitareId = this.route.snapshot.paramMap.get('solicitareId')
		console.log(this.solicitareId, 'is it??')

		this.getSolicitare()
	}

	clearInputFile(key) {
		let obj = {}
		obj[key + '_source'] = ''
		this.form.patchValue(obj)
		this.files[key] = []
	}

	get content() {
		return this.form.get('content');
	}

	async downloadFile (documentId) {
		console.log(documentId)
	}
	async sendMessage() {
		console.group(this.form.value)

		var self = this
		try {
			self.dgitlService.saveMessageSolicitare(this.solicitareId, this.form.value)
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data !== 'undefined') {
							await self.notificationService.warningSwal(
								self.successTitle, 'Mesaj transmis cu succes.', self.successIcon
							);
							self.getSolicitare()
							self.form.patchValue({
								content: '',
								documents_source: ''
							})
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
				// self.openToast(obj)

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
				// self.openToast(obj)
			});
	}

	async getSolicitare() {
		var self = this
		try {
			self.dgitlService.viewSolicitare(this.solicitareId)
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data !== 'undefined') {
							console.log(response.data)

							self.solicitare = response.data.cerere
							self.istoric = response.data.istoric
							self.loaded = 1
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

}
