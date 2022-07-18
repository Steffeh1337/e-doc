import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';

import { environment } from '../../environments/environment';
import { NotificationService } from '../general/notification.service';
import { ReviewsService } from '../services/reviews.service';

@Component({
	selector: 'app-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: ['./reviews.component.sass']
})


export class ReviewsComponent implements OnInit {

	loaded: any = 0;

	reviews: any = [];
	data: any = [];

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
		private notificationService: NotificationService,
		private reviewsService: ReviewsService
	) { }

	ngOnInit (): void {
		this.getReviews();
	}

	async getReviews () {
		var self = this;

		self.reviewsService.list()
			.then(async (res) => {
				let response = (typeof res.status_code !== 'undefined' ? res : res.error);
				if (typeof response.status_code !== 'undefined') {
					if (response.status_code == 200 && typeof response.data !== 'undefined') {
						self.reviews = response.data.reviews;
						self.data = response.data.data;
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
}
