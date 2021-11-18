import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DataTableDirective } from 'angular-datatables';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';

import { AddComponent } from './partials/add/add.component';
import { EditComponent } from './partials/edit/edit.component';

import { HttpClient } from '@angular/common/http';

import { ArticoleService } from './articole.service';
import { NotificationService } from 'src/app/general/notification.service';

import { environment } from '../../../../environments/environment'

import { Subject } from 'rxjs';

class DataTablesResponse{
	data: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}

@Component({
	selector: 'app-articole',
	templateUrl: './articole.component.html',
	styleUrls: ['./articole.component.sass']
})

export class ArticoleComponent implements OnInit {

	@ViewChild(DataTableDirective, {static: false})

	dtElement: DataTableDirective;
	dtTrigger: any = new Subject();
	dtOptions: DataTables.Settings = {};

	loaded: any = 0;

	@ViewChild('ngxLoading') ngxLoadingComponent: NgxLoadingComponent;
	@ViewChild('customLoadingTemplate') customLoadingTemplate: TemplateRef<any>;
	public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
	public loading = false;
	public loadingTemplate: TemplateRef<any>;

	errorTitle: string = environment.config.customNotifications.headers.error;
	errorIcon: string = environment.config.customNotifications.icons.error;
	errorType: string = environment.config.customNotifications.icons.error;

    successTitle: string = environment.config.customNotifications.headers.success;
	successIcon: string = environment.config.customNotifications.icons.success;
	successType: string = environment.config.customNotifications.icons.success;

	editErrorLabel: string = environment.config.customNotifications.mobile.articole.editError;
	addErrorLabel: string = environment.config.customNotifications.mobile.articole.addError;
	editSuccessLabel: string = environment.config.customNotifications.mobile.articole.editSuccess;
	addSuccessLabel: string = environment.config.customNotifications.mobile.articole.addSuccess;
	changeVisibilityErrorLabel: string = environment.config.customNotifications.mobile.articole.changePublicVisibilityError;
	changeVisibilitySuccessLabel: string = environment.config.customNotifications.mobile.articole.changePublicVisibilitySuccess;

	generalError = environment.config.customNotifications.generalMessages.error;


	constructor(
		private http: HttpClient,
		private articoleService: ArticoleService,
		private notificationService: NotificationService,
		private dialog: MatDialog
	) { }

	ngOnInit(): void {
		this.datatable();
	}


	ngAfterViewInit(): void {
		this.dtTrigger.next();
	}


	ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}


	toggleTemplate(): void {
		if (this.loadingTemplate) {
			this.loadingTemplate = null;
		} else {
			this.loadingTemplate = this.customLoadingTemplate;
		}
	}


	rerender(): void {
		this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
			dtInstance.draw(false)
		});
	}


	async datatable(){

		var self = this;

		self.toggleTemplate();
		self.loading = true;

		this.dtOptions = {
			pagingType: "full_numbers",
			pageLength: 10,
			serverSide: true,
			processing: true,
			language: {
				paginate: {
					first: "Prima",
					last: "Ultima",
					next: ">>",
					previous: "<<"
				},
				loadingRecords: "Va rugam asteptati. Se incarca...",
				processing: "Va rugam asteptati. Se incarca...",
				lengthMenu: "Afiseaza _MENU_ inregistrari",
				infoFiltered: "(filtrate din totalul de _MAX_ inregistrari)",
				info: "Afisate de la _START_ pana la _END_ din _TOTAL_ inregistrari",
				emptyTable: "Lipsa inregistrari",
				infoEmpty: "Lipsa inregistrari",
				zeroRecords: "Lipsa inregistrari"
			},
			ajax: (dataTablesParameters: any, callback) => {
				self.http
				.post<DataTablesResponse>(
					'http://ps6-web.back.lc/api/articles',
					dataTablesParameters, {}
				).
				subscribe(response => {

					self.loading = false;
					self.loaded = 1;

					$(function(){
						$('.edit-article').on('click', function(){
							let id = $(this).val();
							self.editArticle(id);
						});

						$('.update-public-view').on('click', function(){
							let id = $(this).val();
							self.updatePublicView(id);
						});
					});

					callback({
						recordsTotal: response.data['recordsTotal'],
						recordsFiltered: response.data['recordsFiltered'],
						data: response.data['data']
					});
				});
			},
			columns: [
				{ title: 'ID', data: 'id' },
				{ title: 'Nume', data: 'title' }, 
				{ title: 'WEB', data: 'website' },
				{ title: 'Data actualizat', data: 'last_update' },
				{ orderable: false, data: 'actions', title: 'Actiuni' }
			],
		};
	}


	async editArticle(id){

		var self = this;

		self.articoleService.findArticle(id)
		.then(async (res) => {
			let response = (typeof res.status_code !== 'undefined' ? res : res.error)
			if (typeof response.status_code !== 'undefined') {
				if (response.status_code == 200 && typeof response.data !== 'undefined') {

					self.loading = false;
					let element = response.data;
					console.log(element);

					self.loaded = 1;

					let dataToDialog = {
						el: element,
					};
					
					let dialogRef = self.dialog.open(EditComponent, {
						width: "1000px",
						data: dataToDialog,
						autoFocus: false,
						maxHeight: '90vh'
						
					})
					.afterClosed()
					.subscribe(res => {
						// if(res){
						// 	let dataToSend = {
						// 		id: id,
						// 		title: res.data.title,
						// 		content: res.data.content,
						// 		url: res.data.url,
						// 	};
							
						// 	self.articoleService.updateArticle(dataToSend)
						// 	.then(async (res) => {
						// 		if(res.errors == false){
						// 			self.loading = false;
						// 			self.rerender();
						// 			self.loaded = 1;

						// 			await self.notificationService.warningSwal(
						// 				self.successTitle, self.editSuccessLabel,  self.successIcon
						// 			);
						// 		}
						// 		else{
						// 			self.loading = false;
						// 			await self.notificationService.warningSwal(
						// 				self.errorTitle, self.generalError, self.errorIcon
						// 			);

						// 			return false;
						// 		}
						// 	})
						// 	.catch(async err => {
						// 		self.loading = false;
						// 		await self.notificationService.warningSwal(
						// 			self.errorTitle, self.generalError, self.errorIcon
						// 		);
								
						// 		return false;
						// 	});
						// }
					});

					return false;

				} else {
					self.loading = false;
					await self.notificationService.warningSwal(
						self.errorTitle, self.generalError, self.errorIcon
					);

					return false;
				}

			} else {
				self.loading = false;
				await self.notificationService.warningSwal(
					self.errorTitle, self.generalError, self.errorIcon
				);

				return false;
			}
		})
		.catch(async err => {
			self.loading = false;
			await self.notificationService.warningSwal(
				self.errorTitle, self.generalError, self.errorIcon
			);
			
			return false;
		});
	}


	async addArticle(){
		
	}


	async updatePublicView(id){
		
		var self = this;
		self.articoleService.updatePublicView(id)
		.then(async (res) => {
			let response = (typeof res.status_code !== 'undefined' ? res : res.error)
			if (typeof response.status_code !== 'undefined') {
				if (response.status_code == 200 && typeof response.data !== 'undefined') {

					self.loading = false;
					self.rerender();
					self.loaded = 1;

					await self.notificationService.warningSwal(
						self.successTitle, self.changeVisibilitySuccessLabel,  self.successIcon
					);
					return false;

				} else {
					self.loading = false;
					await self.notificationService.warningSwal(
						self.errorTitle, self.changeVisibilityErrorLabel, self.errorIcon
					);

					return false;
				}

			} else {
				self.loading = false;
				await self.notificationService.warningSwal(
					self.errorTitle, self.generalError, self.errorIcon
				);

				return false;
			}
		})
		.catch(async err => {
			self.loading = false;
			await self.notificationService.warningSwal(
				self.errorTitle, self.generalError, self.errorIcon
			);
			
			return false;
		});
	}

}
