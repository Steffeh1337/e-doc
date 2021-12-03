import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DataTableDirective } from 'angular-datatables';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';

import { HttpClient } from '@angular/common/http';

import { InstitutiiService } from '../../../institutii.service';
import { NotificationService } from 'src/app/general/notification.service';

import { environment } from '../../../../../../../../environments/environment'

import { Subject } from 'rxjs';

import { Router } from '@angular/router';


class DataTablesResponse{
	data: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}

@Component({
	selector: 'directii-compartimente-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.sass']
})

export class ListComponent implements OnInit {

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

	editErrorLabel: string = environment.config.customNotifications.mobile.setari.institutii.compartimente.editError;
	addErrorLabel: string = environment.config.customNotifications.mobile.setari.institutii.compartimente.addError;
	editSuccessLabel: string = environment.config.customNotifications.mobile.setari.institutii.compartimente.editSuccess;
	addSuccessLabel: string = environment.config.customNotifications.mobile.setari.institutii.compartimente.addSuccess;
	
	generalError = environment.config.customNotifications.generalMessages.error;


	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private http: HttpClient,
		private institutiiService: InstitutiiService,
		private notificationService: NotificationService,
		private dialog: MatDialog,
		private editDialogRef: MatDialogRef<EditComponent>,
		private addDialogRef: MatDialogRef<AddComponent>,
		private router: Router
	) { 
	}

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


	cancel(){
		this.editDialogRef.close();
		this.addDialogRef.close();
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
					'http://ps6-web.back.lc/api/directii-compartimente/' + self.data.el.id_directie,
					dataTablesParameters, {}
				).
				subscribe(response => {

					self.loading = false;
					self.loaded = 1;

					$(function(){
						$('.edit-compartiment').on('click', function(){
							let id = $(this).val();
							self.editCompartiment(id);
						});

						// $('.delete-faq').on('click', function(){
						// 	let id = $(this).val();
						// 	self.deleteCompartiment(id);
						// });
					});

					callback({
						recordsTotal: response.data['recordsTotal'],
						recordsFiltered: response.data['recordsFiltered'],
						data: response.data['data']
					});
				});
			},
			columns: [
				{ title: 'ID', data: 'id_compartiment' },
				{ title: 'Denumire', data: 'name' },
				{ orderable: false, data: 'actions', title: 'Actiuni' }
			],
		};
	}


	async editCompartiment(id){

		var self = this;

		self.institutiiService.findCompartiment(id)
		.then(async (res) => {
			let response = (typeof res.status_code !== 'undefined' ? res : res.error)
			if (typeof response.status_code !== 'undefined') {
				if (response.status_code == 200 && typeof response.data !== 'undefined') {

					console.log(response.data);
					self.loading = false;
					let element = response.data;
					self.loaded = 1;

					let dataToDialog = {
						el: element,
					};

					let dialogRef = self.dialog.open(EditComponent, {
						width: "500px",
						data: dataToDialog,
					})
					.afterClosed()
					.subscribe(res => {
						if(res){
							let dataToSend = {
								id_compartiment: id,
								name: res.data.name,
								description: res.data.description,
							};
							
							self.institutiiService.updateCompartiment(dataToSend)
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


	async addCompartiment(){

		var self = this;

		let dialogRef = self.dialog.open(AddComponent, {
			width: "500px",
		})
		.afterClosed()
		.subscribe(res => {
			if(res){
				let dataToSend = {
					name: res.data.name,
					description: res.data.description,
				};
				
				self.institutiiService.storeCompartiment(dataToSend, self.data.el.id_directie)
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

}
