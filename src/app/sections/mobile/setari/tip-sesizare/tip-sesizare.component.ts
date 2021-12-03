import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DataTableDirective } from 'angular-datatables';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';

import { AddComponent } from './partials/add/add.component';
import { EditComponent } from './partials/edit/edit.component';

import { HttpClient } from '@angular/common/http';

import { TipSesizareService } from './tip-sesizare.service';
import { NotificationService } from 'src/app/general/notification.service';

import { environment } from '../../../../../environments/environment'

import { Subject } from 'rxjs';


class DataTablesResponse{
	data: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}

@Component({
	selector: 'tip-sesizare',
	templateUrl: './tip-sesizare.component.html',
	styleUrls: ['./tip-sesizare.component.sass']
})

export class TipSesizareComponent implements OnInit {

	@ViewChild(DataTableDirective, {static: false})

	dtElement: DataTableDirective;
	dtTrigger: any = new Subject();
	dtOptions: DataTables.Settings = {};

	departments: any[];

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

	editErrorLabel: string = environment.config.customNotifications.mobile.setari.tipuriSesizari.editError;
	addErrorLabel: string = environment.config.customNotifications.mobile.setari.tipuriSesizari.addError;
	editSuccessLabel: string = environment.config.customNotifications.mobile.setari.tipuriSesizari.editSuccess;
	addSuccessLabel: string = environment.config.customNotifications.mobile.setari.tipuriSesizari.addSuccess;

	generalError = environment.config.customNotifications.generalMessages.error;

	
	constructor(
		private http: HttpClient,
		private tipSesizareService: TipSesizareService,
		private notificationService: NotificationService,
		private dialog: MatDialog
	) { }


	ngOnInit(): void {
		this.getDepartments();
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
					'http://ps6-web.back.lc/api/sesizaretypes',
					dataTablesParameters, {}
				).
				subscribe(response => {

					self.loading = false;
					self.loaded = 1;

					$(function(){
						$('.edit-type').on('click', function(){
							let id_sesizare_type = $(this).val();
							self.editType(id_sesizare_type);
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
				{ title: 'ID', data: 'id_sesizare_type' },
				{ title: 'Nume', data: 'name' },
				{ title: 'Departament', data: 'department.name', defaultContent: "" },
				{ orderable: false, data: 'actions', title: 'Actiuni' }
			],
		};
	}


	async addType(){
		
		var self = this;

		let dataToDialog = {
			departments: self.departments
		};

		let dialogRef = self.dialog.open(AddComponent, {
			width: "500px",
			data: dataToDialog
		})
		.afterClosed()
		.subscribe(res => {
			if(res){
				let dataToSend = {
					name: res.data.name,
					id_department: res.data.id_department,
				};
				
				self.tipSesizareService.storeSesizareType(dataToSend)
				.then(async (res) => {
					if(res.errors == false){
						self.loading = false;
						self.rerender();
						self.loaded = 1;

						await self.notificationService.warningSwal(
							self.successTitle, self.addSuccessLabel, self.successIcon
						);

						return false;
					}
					else{
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
		});
	}


	async editType(id){
		
		var self = this;

		self.tipSesizareService.getSesizareType(id)
		.then(async (res) => {
			let response = (typeof res.status_code !== 'undefined' ? res : res.error)
			if (typeof response.status_code !== 'undefined') {
				if (response.status_code == 200 && typeof response.data !== 'undefined') {

					self.loading = false;
					let element = response.data;

					self.loaded = 1;

					let dataToDialog = {
						el: element,
						departments: self.departments
					};
					
					let dialogRef = self.dialog.open(EditComponent, {
						width: "500px",
						data: dataToDialog
					})
					.afterClosed()
					.subscribe(res => {
						if(res){
							let dataToSend = {
								id_sesizare_type: id,
								name: res.data.name,
								id_department: res.data.id_department,
							};
							
							self.tipSesizareService.updateSesizareType(dataToSend)
							.then(async (res) => {
								if(res.errors == false){
									self.loading = false;
									self.rerender();
									self.loaded = 1;

									await self.notificationService.warningSwal(
										self.successTitle, self.editSuccessLabel,  self.successIcon
									);
								}
								else{
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


	async getDepartments(){

		var self = this;

		self.toggleTemplate();
		self.loading = true;

		self.tipSesizareService.getDepartments()
		.then(async (res) => {
			let response = (typeof res.status_code !== 'undefined' ? res : res.error)
			if (typeof response.status_code !== 'undefined') {
				if (response.status_code == 200 && typeof response.data !== 'undefined') {

					self.loading = false;
					self.departments = response.data;
					self.loaded = 1;

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

				return false
			}
		})
	}
}
