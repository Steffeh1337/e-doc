import { Component, OnInit, ViewChild, TemplateRef, Injector } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DataTableDirective } from 'angular-datatables';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';

import { PayloadComponent } from './partials/payload/payload.component';
import { HttpClient } from '@angular/common/http';

import { LoguriService } from './loguri.service';
import { NotificationService } from 'src/app/general/notification.service';

import { environment } from '../../../../environments/environment'

import { Subject } from 'rxjs';

import { Router } from '@angular/router';

class DataTablesResponse {
	data: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}

@Component({
	selector: 'loguri',
	templateUrl: './loguri.component.html',
	styleUrls: ['./loguri.component.sass']
})

export class LoguriComponent implements OnInit {

	@ViewChild(DataTableDirective, { static: false })

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

	generalError = environment.config.customNotifications.generalMessages.error;

	search: any = {
		id_module: -1,
		severity: -1,
		action_id: -1,
		id_user: -1,
		id_log: null,
		id_updated: null
	};

	severityStatuses = [
		{
			id: -1,
			name: '-- Toate --'
		},
		{
			id: 0,
			name: 'Log'
		},
		{
			id: 1,
			name: 'Notice'
		},
		{
			id: 2,
			name: 'Warning'
		},
		{
			id: 3,
			name: 'Error'
		}
	];

	actions = [
		{
			id: -1,
			name: '-- Toate --'
		},
		{
			id: 1,
			name: 'Create'
		},
		{
			id: 2,
			name: 'Update'
		},
		{
			id: 3,
			name: 'Delete'
		}
	];

	modules = [
		{
			id: -1,
			name: '-- Toate --'
		},
		{
			id: 1,
			name: 'DepartmentController'
		},
		{
			id: 2,
			name: 'TicketStatusController'
		},
		{
			id: 3,
			name: 'TicketTypeController'
		},
		{
			id: 4,
			name: 'TicketPriorityController'
		},
		{
			id: 5,
			name: 'CronJobController'
		},
		{
			id: 6,
			name: 'UserController'
		},
		{
			id: 7,
			name: 'TicketHistoryController'
		},
		{
			id: 8,
			name: 'TicketSabloaneController'
		},
		{
			id: 9,
			name: 'DirectiiController'
		},
		{
			id: 10,
			name: 'RegistraturaController'
		},
		{
			id: 11,
			name: 'TicketController'
		}
	];

	operators = [
		{
			id: -1,
			name: '-- Toti --'
		},
		{
			id: 1,
			name: 'Responsabil 1'
		},
		{
			id: 2,
			name: 'Responsabil 2'
		},
		{
			id: 3,
			name: 'Responsabil 3'
		},
	];

	pathDT: string

	constructor (
		private http: HttpClient,
		private loguriService: LoguriService,
		private notificationService: NotificationService,
		private dialog: MatDialog,
		private router: Router,
	) {
		this.pathDT = environment.interop.basePath + environment.interop.api.administrativ.loguri.list
	}


	ngOnInit (): void {
		this.datatable();
	}


	ngAfterViewInit (): void {
		this.dtTrigger.next();
	}


	ngOnDestroy (): void {
		this.dtTrigger.unsubscribe();
	}


	toggleTemplate (): void {
		if (this.loadingTemplate) {
			this.loadingTemplate = null;
		} else {
			this.loadingTemplate = this.customLoadingTemplate;
		}
	}


	rerender (): void {

		// this.datatable();

		this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
			dtInstance.draw(false)
		});
	}


	async datatable () {

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
				search: "Cauta:",
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

				const dtData = { ...dataTablesParameters, search: self.search }
				self.http
					.post<DataTablesResponse>(
						this.pathDT,
						dtData, {}
					).
					subscribe(response => {
						self.loading = false;
						self.loaded = 1;

						$(function () {
							$('.list-payload').on('click', function () {
								let id = $(this).val();
								self.showPayload(id);
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
				{ title: 'ID', data: 'id_log' },
				{ title: 'Mesaj', data: 'message', searchable: false },
				{ title: 'Modul', data: 'module_name' },
				{
					title: 'Severitate', data: 'severity', searchable: false, render: function (data, type, full, meta) {
						let eachRowSeverity = meta.settings['aoData'][meta.row]['_aData'].severity;
						switch (eachRowSeverity) {
							case 0:
								return `<span class='green-text'><i class='fa fa-check-circle fa-fw text-center'></i>Log</span>`;

							case 1:
								return `<span class='text-info'><i class='fa fa-info-circle fa-fw text-center'></i>Notice</span>`;

							case 2:
								return `<span class='text-warning'><i class='fa fa-warning fa-fw text-center'></i>Warning</span>`;

							case 3:
								return `<span class='text-danger'><i class='fa fa-exclamation-circle fa-fw text-center'></i>Error</span>`

							default:
								return 'undefined'
						}
					}
				},
				{ title: 'Cod', data: 'error_code', searchable: false },
				{ title: 'User', data: 'user_name' },
				{ title: 'Actiune', data: 'action_type', searchable: false },
				{ title: 'ID Update', data: 'id_updated' },
				{ title: 'Data Actiune', data: 'created_at', searchable: false },
				{ orderable: false, title: '#', data: 'actions', searchable: false },
			],
			order: [0, 'desc']
		};
	}


	async showPayload (id) {

		var self = this;

		self.loguriService.findLog(id)
			.then(async (res) => {
				let response = (typeof res.status_code !== 'undefined' ? res : res.error)
				if (typeof response.status_code !== 'undefined') {
					if (response.status_code == 200 && typeof response.data !== 'undefined') {

						self.loading = false;
						let object_json = response.data.object_json
						self.loaded = 1;

						let dataToDialog = {
							data: object_json
						};

						let dialogRef = self.dialog.open(PayloadComponent, {
							width: "500px",
							data: dataToDialog,
						})
							.afterClosed()
							.subscribe(res => {
								console.log('inchis modal payload');
							});
					}
					else {
						self.loading = false;
						await self.notificationService.warningSwal(
							self.errorTitle, self.generalError, self.errorIcon
						);

						return false;
					}
				}
				else {
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
