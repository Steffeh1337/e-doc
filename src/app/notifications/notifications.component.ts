import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';

import { environment } from '../../environments/environment';
import { AppointmentsService } from '../services/appointments.service';
// swal
import { NotificationService } from '../general/notification.service';
// actual notifications
import { NotificationsService } from '../services/notifications.service';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.sass']
})


export class NotificationsComponent implements OnInit {

	loaded: any = 0;

	notifications: any = [];

	successTitle: string = environment.config.customNotifications.headers.success;
	successIcon: string = environment.config.customNotifications.icons.success;

	errorTitle: string = environment.config.customNotifications.headers.error;
	errorIcon: string = environment.config.customNotifications.icons.error;

	@ViewChild('ngxLoading') ngxLoadingComponent: NgxLoadingComponent;
	@ViewChild('customLoadingTemplate') customLoadingTemplate: TemplateRef<any>;
	public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
	public loading = false;
	public loadingTemplate: TemplateRef<any>;

	constructor (
		private appointmentsService: AppointmentsService,
		private notificationService: NotificationService,
		private notificationsService: NotificationsService,

		private http: HttpClient,
	) { }

	ngOnInit (): void {
		this.getNotifications();
	}

	async getNotifications () {
		var self = this;

		self.notificationsService.list()
			.then(async (res) => {
				let response = (typeof res.status_code !== 'undefined' ? res : res.error);
				if (typeof response.status_code !== 'undefined') {
					if (response.status_code == 200 && typeof response.data !== 'undefined') {
						self.notifications = response.data;
						self.loaded = 1;
					}
					else {
						await self.notificationService.warningSwal(
							self.errorTitle, environment.config.customNotifications.generalMessages.error, self.errorIcon
						);
						return false;
					}
				}
				else {
					await self.notificationService.warningSwal(
						self.errorTitle, environment.config.customNotifications.generalMessages.error, self.errorIcon
					);
					return false;
				}
			})
	}

	async markAsRead (item) {
		var self = this;

		let status = item.read == 0 ? 'citită' : 'necitită';

		self.notificationsService.markAsRead(item.id)
			.then(async (res) => {
				let response = (typeof res.status_code !== 'undefined' ? res : res.error);
				if (typeof response.status_code !== 'undefined') {
					if (response.status_code == 200 && typeof response.data !== 'undefined') {

						await self.notificationService.warningSwal(
							self.successTitle, response.data, self.successIcon
						);

						await self.getNotifications();
					}
					else {
						await self.notificationService.warningSwal(
							self.errorTitle, environment.config.customNotifications.generalMessages.error, self.errorIcon
						);
						return false;
					}
				}
				else {
					await self.notificationService.warningSwal(
						self.errorTitle, environment.config.customNotifications.generalMessages.error, self.errorIcon
					);
					return false;
				}
			})
	}

}
