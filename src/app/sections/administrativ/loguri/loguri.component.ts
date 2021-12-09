import { Component, OnInit, ViewChild, TemplateRef, Injector} from '@angular/core';

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

class DataTablesResponse{
	data: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}

// class BatchSearch {
// 	id_user: number;
// 	severity: number;
// 	id_module: number;
// 	action_id: number;
// 	id_log: number;
// 	id_updated: number;

// 	constructor(id_user: number = -1, severity: number = -1, id_module: number = -1, action_id: number = -1, id_log: number = null, id_updated: number = null){
// 		this.id_user = id_user;
// 		this.severity = severity;
// 		this.id_module = id_module;
// 		this.action_id = action_id;
// 		this.id_log = id_log;
// 		this.id_updated = id_updated;
// 	}
// }

@Component({
	selector: 'loguri',
	templateUrl: './loguri.component.html',
	styleUrls: ['./loguri.component.sass']
})

export class LoguriComponent implements OnInit {

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

	generalError = environment.config.customNotifications.generalMessages.error;

	search : any = {
		id_user: -1,
		severity: -1,
		id_module: -1,
		action_id: -1,
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

	responsibles = [];

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

	constructor(
		private http: HttpClient,
		private loguriService: LoguriService,
		private notificationService: NotificationService,
		private dialog: MatDialog,
		private router: Router,
	) {
	}


	ngOnInit(): void {
		$.fn['dataTable'].ext.search.push(this.search);
		this.datatable();
		console.log(this.search);
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
				self.http
				.post<DataTablesResponse>(
					'http://ps6-web.back.lc/api/logs',
					dataTablesParameters, {}
				).
				subscribe(response => {
					console.log(dataTablesParameters);
					self.loading = false;
					self.loaded = 1;

					$(function(){
						$('.list-payload').on('click', function(){
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
				{ title: 'Mesaj', data: 'message' },
				{ title: 'Modul', data: 'module_name' },
				{ orderable: false, title: 'Label', data: 'label' },
				{ title: 'Code', data: 'error_code' },
				{ title: 'User', data: 'user_name' },
				{ title: 'Action', data: 'action_type' },
				{ title: 'ID Update', data: 'id_updated' },
				{ title: 'Action Date', data: 'created_at'},
				{ orderable: false, title: '#', data: 'actions' },
			],
			order: [0, 'desc']
		};
	}


	async showPayload(id){

		var self = this;

		self.loguriService.findLog(id)
		.then(async (res) => {
			let response = (typeof res.status_code !== 'undefined' ? res : res.error)
			if(typeof response.status_code !== 'undefined'){
				if(response.status_code == 200 && typeof response.data !== 'undefined'){

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
