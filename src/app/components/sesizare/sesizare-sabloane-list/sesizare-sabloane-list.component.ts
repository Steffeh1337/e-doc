import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import { SesizareSabloaneListAddComponent } from 'src/app/components/sesizare/sesizare-sabloane-list/partials/sesizare-sabloane-list-add/sesizare-sabloane-list-add.component';
import { SesizareSabloaneListEditComponent } from 'src/app/components/sesizare/sesizare-sabloane-list/partials/sesizare-sabloane-list-edit/sesizare-sabloane-list-edit.component';

class DataTablesResponse{
	data: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}

@Component({
	selector: 'sesizare-sabloane-list',
	templateUrl: './sesizare-sabloane-list.component.html',
	styleUrls: ['./sesizare-sabloane-list.component.sass']
})

export class SesizareSabloaneListComponent implements OnInit {

	dtOptions: DataTables.Settings = {};
	displayTable: boolean;
	data: any[];

	constructor(
		private http: HttpClient,
		private dialog: MatDialog
	) { }

  
	ngOnInit(): void {
		this.datatable();
	}

	datatable(): void{
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
				zeroRecords: ""
			},
			ajax: (dataTablesParameters: any, callback) => {
				self.http
				.post<DataTablesResponse>(
					'http://ps6-web.back.lc/api/sesizaresabloane',
					dataTablesParameters, {}
				).
				subscribe(response => {

					self.displayTable = true;
					self.data = response.data['data'];

					callback({
						recordsTotal: response.data['recordsTotal'],
						recordsFiltered: response.data['recordsFiltered'],
						// data: response.data['data'],
					});
				});
			},
			columns: [{ title: 'ID', data: 'id' }, { title: 'Nume', data: 'name' }, { title: 'Actiuni', data: 'actions', orderable: false}],
		};
	}

	editSablon(id): void{

		let el = this.data.find(obj => {
			return obj.id === id;
		});

		let dialogRef = this.dialog.open(SesizareSabloaneListEditComponent, {
			width: "1000px",
			data: el
		})
		.afterClosed()
		.subscribe(res => {
			if(res){
				let dataToSend = {
					id: id,
					name: res.data.name,
					content: res.data.content,
				};
				
				this.http.put<any>(
					'http://ps6-web.back.lc/api/sesizare-sabloane',
					dataToSend,
				)
				.subscribe(response => {
					if(response.data == 'success'){
						el.name = res.data.name;
						el.content = res.data.content;
					}
				});
			}
		});
	}

	addSablon(): void{

		let dialogRef = this.dialog.open(SesizareSabloaneListAddComponent, {
			width: "1000px",
		})
		.afterClosed()
		.subscribe(res => {
			if(res){
				let dataToSend = {
					name: res.data.name,
					content: res.data.content,
				};

				this.http.post<any>(
					'http://ps6-web.back.lc/api/sesizare-sabloane',
					dataToSend,
				).subscribe(response => {
					console.log(response);
					this.datatable();
				});
			}
		});
	}
}
