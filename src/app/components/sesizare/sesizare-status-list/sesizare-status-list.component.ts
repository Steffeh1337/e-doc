import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import { SesizareStatusListAddComponent } from 'src/app/components/sesizare/sesizare-status-list/partials/sesizare-status-list-add/sesizare-status-list-add.component';
import { SesizareStatusListEditComponent } from 'src/app/components/sesizare/sesizare-status-list/partials/sesizare-status-list-edit/sesizare-status-list-edit.component';

class DataTablesResponse{
	data: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}

@Component({
  selector: 'sesizare-status-list',
  templateUrl: './sesizare-status-list.component.html',
  styleUrls: ['./sesizare-status-list.component.sass']
})

export class SesizareStatusListComponent implements OnInit {

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
					'http://ps6-web.back.lc/api/sesizarestatuses',
					dataTablesParameters, {}
				).
				subscribe(response => {

					self.displayTable = true;
					self.data = response.data['data'];

					self.data.forEach((item) => {
						item.textColor = this.pickTextColorBasedOnBgColorSimple(item.color, "#fff", "#000");
					});

					callback({
						recordsTotal: response.data['recordsTotal'],
						recordsFiltered: response.data['recordsFiltered'],
						// data: response.data['data'],
					});
				});
			},
			columns: [{ title: 'ID', data: 'id_sesizare_status' }, { title: 'Nume', data: 'name' }, { title: 'Actiuni', data: 'actions', orderable: false}],
		};
	}

	pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor) {
		var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
		var r = parseInt(color.substring(0, 2), 16); // hexToR
		var g = parseInt(color.substring(2, 4), 16); // hexToG
		var b = parseInt(color.substring(4, 6), 16); // hexToB
		return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ? darkColor : lightColor;
	}

	editStatus(id): void{
		let el = this.data.find(obj => {
			return obj.id_sesizare_status === id;
		});

		let dialogRef = this.dialog.open(SesizareStatusListEditComponent, {
			width: "500px",
			data: el
		})
		.afterClosed()
		.subscribe(res => {
			if(res){
				let dataToSend = {
					id_sesizare_status: id,
					name: res.data.name,
					color: res.data.color,
				};
				
				this.http.put<any>(
					'http://ps6-web.back.lc/api/sesizare/status',
					dataToSend,
				)
				.subscribe(response => {
					if(response.data == 'success'){
						el.name = res.data.name;
						el.color = res.data.color;
					}
				});
			}
		});
	}

	addStatus(): void{

		let dialogRef = this.dialog.open(SesizareStatusListAddComponent, {
			width: "500px",
		})
		.afterClosed()
		.subscribe(res => {
			if(res){
				let dataToSend = {
					name: res.data.name,
					color: res.data.color,
				};

				this.http.post<any>(
					'http://ps6-web.back.lc/api/sesizare/status',
					dataToSend,
				)
				.subscribe(response => {
					console.log(response);
					this.datatable();
				});
			}
		})
	}

}
