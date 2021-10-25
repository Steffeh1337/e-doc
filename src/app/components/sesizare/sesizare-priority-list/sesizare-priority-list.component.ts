import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse } from '@angular/common/http';

class DataTablesResponse{
	data: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}

@Component({
  selector: 'sesizare-priority-list',
  templateUrl: './sesizare-priority-list.component.html',
  styleUrls: ['./sesizare-priority-list.component.sass']
})

export class SesizarePriorityListComponent implements OnInit {

	dtOptions: DataTables.Settings = {};
	displayTable: boolean;

	constructor(
		private http: HttpClient
	) { }

	ngOnInit(): void {
		var self = this;

		this.dtOptions = {
			pagingType: "full_numbers",
			pageLength: 10,
			serverSide: true,
			processing: true,
			language: {
				paginate: {
					first: "Prima",
					last: "Ultima",
					next: "Urmatoarea",
					previous: "Anterior"
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
					'http://ps6-web.back.lc/api/sesizarepriorities',
					dataTablesParameters, {}
				).
				subscribe(response => {

					self.displayTable = true;

					callback({
						recordsTotal: response.data['recordsTotal'],
						recordsFiltered: response.data['recordsFiltered'],
						data: response.data['data'],
					});
				});
			},
			columns: [{ title: 'ID', data: 'id_sesizare_priority' }, { title: 'Prioritate', data: 'name' }, { title: 'Timp(ore)', data: 'time' }, { title: 'Actiuni', data: 'actions', orderable: false}],
		};
	}
}
