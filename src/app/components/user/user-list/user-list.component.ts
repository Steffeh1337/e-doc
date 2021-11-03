import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { parseHTML } from 'jquery';
import { parse } from 'querystring';
import { DataTableDirective } from 'angular-datatables';

class DataTablesResponse{
	data: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})

export class UserListComponent implements OnInit {

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
					'http://ps6-web.back.lc/api/users-list',
					dataTablesParameters, {}
				).
				subscribe(response => {

					self.displayTable = true;

					$(function(){
						$('.change-status').on('click', function(){
							let id_user = $(this).val();
							self.changeStatus(id_user);
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
				{ title: 'ID', data: 'id_user' },
				{ title: 'Nume', data: 'name' },
				{ title: 'Email', data: 'email' },
				{ title: 'Departament', data: 'department' },
				{ orderable: false, data: 'actions', title: 'Actiuni' }
			],
		};
	}

	changeStatus(id){
		console.log('trying to change status of ' + id);
		return false;
	}
}
