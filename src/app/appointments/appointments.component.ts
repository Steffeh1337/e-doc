import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';
import { Subject } from 'rxjs';

import Swal from 'sweetalert2';

import { environment } from '../../environments/environment';
import { AppointmentsService } from '../services/appointments.service';
import { NotificationService } from '../general/notification.service';


interface DataTablesResponse {
	data: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}

@Component({
	selector: 'app-appointments',
	templateUrl: './appointments.component.html',
	styleUrls: ['./appointments.component.sass']
})


export class AppointmentsComponent implements OnInit {

	pathDT: string;

	@ViewChild(DataTableDirective, { static: false })

	dtElement: DataTableDirective;
	dtTrigger: any = new Subject();
	dtOptions: DataTables.Settings = {};

	loaded: any = 0;

	search: any = {
		id_user: -1,
		user_name: '',
		start_date: null,
		end_date: null,
		cancelledDoctor: -1,
		cancelledUser: -1,
		appointments_type: -1
	};

	advancedFilters: any = {};
	advancedFiltersLoaded: number = 0;

	appointments: any = [];

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
		private http: HttpClient,
	) {
		var self = this;

		self.pathDT = environment.interop.basePath + environment.interop.api.appointments.list;

		self.advancedFilters['appointments_type'] = [
			{
				id: 1,
				name: 'Trecut'
			},
			{
				id: 2,
				name: 'Viitor'
			}
		];
	}

	ngOnInit (): void {
		this.datatable();
		this.getAdvancedFilterValues();
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
		this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
			dtInstance.draw(false)
		});
	}

	async getAdvancedFilterValues () {
		var self = this;

		self.appointmentsService.getAdvancedFilterData()
			.then(async (res) => {
				let response = (typeof res.status_code !== 'undefined' ? res : res.error);
				if (typeof response.status_code !== 'undefined') {
					if (response.status_code == 200 && typeof response.data !== 'undefined') {
						self.advancedFilters['users'] = response.data;
						self.advancedFiltersLoaded = 1;
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

	async datatable () {
		var self = this;

		self.toggleTemplate();
		self.loading = true;

		this.dtOptions = {
			pagingType: "full_numbers",
			pageLength: 10,
			serverSide: true,
			processing: true,
			searching: false,
			language: {
				paginate: {
					first: "Prima",
					last: "Ultima",
					next: ">>",
					previous: "<<"
				},
				search: "Caută:",
				loadingRecords: "Vă rugam așteptați. Se încarcă...",
				processing: "Vă rugam așteptați. Se încarcă...",
				lengthMenu: "Afișează _MENU_ înregistrări",
				infoFiltered: "(filtrate din totalul de _MAX_ înregistrări)",
				info: "Afișate de la _START_ pana la _END_ din _TOTAL_ înregistrări",
				emptyTable: "Lipsă înregistrări",
				infoEmpty: "Lipsă înregistrări",
				zeroRecords: "Lipsă înregistrări"
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
							$('.cancel').on('click', function () {
								let id = $(this).val();
								self.showCancel(id);
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
				{ title: 'ID', data: 'id_appointment', searchable: false },
				{ title: 'Pacient', data: 'name', searchable: false },
				{ title: 'Dată start', data: 'start_date', searchable: false },
				{ title: 'Dată sfârșit', data: 'end_date', searchable: false },
				{ title: 'Sumă', data: 'amount', searchable: false },
				{
					title: 'Anulat pacient', data: 'cancelled_user', searchable: false, render: function (data, type, full, meta) {
						let eachRowCancelled = meta.settings['aoData'][meta.row]['_aData'].cancelled_user;

						switch (eachRowCancelled) {
							case 0:
								return `<span class='text-success'><i class='fa fa-check-circle fa-fw text-center'></i>NU</span>`;

							case 1:
								return `<span class='text-danger'><i class='fa fa-exclamation-circle fa-fw text-center'></i>DA</span>`;

							default:
								return 'n/a';
						}
					}
				},
				{
					title: 'Anulat doctor', data: 'cancelled_doctor', searchable: false, render: function (data, type, full, meta) {
						let eachRowCancelled = meta.settings['aoData'][meta.row]['_aData'].cancelled_doctor;

						switch (eachRowCancelled) {
							case 0:
								return `<span class='text-success'><i class='fa fa-check-circle fa-fw text-center'></i>NU</span>`;

							case 1:
								return `<span class='text-danger'><i class='fa fa-exclamation-circle fa-fw text-center'></i>DA</span>`;

							default:
								return 'n/a';
						}
					}
				},
				{ title: 'Creat la', data: 'created_at', searchable: false },
				{ orderable: false, title: '#', data: 'actions', searchable: false },
			],
			order: [0, 'desc']
		};
	}

	async showCancel (id) {

		var self = this
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn btn-success',
				cancelButton: 'btn btn-danger'
			},
			buttonsStyling: false
		});

		swalWithBootstrapButtons.fire({
			title: 'Anulați programarea?',
			text: 'Actiune ireversibilă',
			input: 'textarea',
			inputPlaceholder: 'Completați motivul anulării',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Confirmare',
			cancelButtonText: 'Anulare',
			reverseButtons: true
		}).then((result) => {
			if (result.value) {

				if (result.value == '' || result.value.length < 4) {
					swalWithBootstrapButtons.fire(
						'Eroare',
						'Vă rugăm introduceți motivul anulării! (minim 4 caractere)',
						'error'
					);
					return false;
				}

				try {
					self.appointmentsService.cancelAppointment(parseInt(id), { motiv: result.value })
						.then(async (res) => {
							let response = (typeof res.status_code !== 'undefined' ? res : res.error)
							if (typeof response.status_code !== 'undefined') {
								if (response.status_code == 200 && typeof response.data !== 'undefined') {

									self.rerender()
									swalWithBootstrapButtons.fire(
										'Succes',
										'Programare anulată cu succes!',
										'success'
									);
									return false;

								} else {
									let errorMessage = environment.config.customNotifications.generalMessages.error;
									response.errors.message.forEach(function (msg) {
										errorMessage = msg;
									})
									swalWithBootstrapButtons.fire(
										'Am întâmpinat o eroare!',
										errorMessage,
										'error'
									);
									return false;
								}

							} else {
								let errorMessage = environment.config.customNotifications.generalMessages.error;
								swalWithBootstrapButtons.fire(
									'Am întâmpinat o eroare!',
									errorMessage,
									'error'
								);
								return false
							}
						})
						.catch(async err => {
							let errorMessage = environment.config.customNotifications.generalMessages.error;
							swalWithBootstrapButtons.fire(
								'Am întâmpinat o eroare!',
								errorMessage,
								'error'
							);
							return false
						})

				} catch (err) {
					console.log(err)
					self.notificationService.warningSwal(this.errorTitle, 'Am întâmpinat o problemă în procesarea informațiilor dvs. Vă rugam să reîncercați sau să reveniți mai târziu.', this.errorIcon)

					swalWithBootstrapButtons.fire(
						'Am întâmpinat o eroare!',
						'Am întâmpinat o problemă în procesarea informațiilor dvs. Vă rugam să reîncercați sau să reveniți mai târziu.',
						'error'
					);
					return false
				}
			} else if (
				/* Read more about handling dismissals below */
				result.dismiss === Swal.DismissReason.cancel
			) {
				swalWithBootstrapButtons.fire(
					'Anulat',
					'Programarea NU a fost anulată!',
					'error'
				);
			}
		});
	}



}
