import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import { MobileSectionAddComponent } from 'src/app/components/mobile/mobile-section-list/partials/mobile-section-add/mobile-section-add.component';
import { MobileSectionEditComponent } from 'src/app/components/mobile/mobile-section-list/partials/mobile-section-edit/mobile-section-edit.component';

class DataTablesResponse{
	data: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}

@Component({
  selector: 'mobile-section-list',
  templateUrl: './mobile-section-list.component.html',
  styleUrls: ['./mobile-section-list.component.sass']
})

export class MobileSectionListComponent implements OnInit {

	dtOptions: DataTables.Settings = {};
	displayTable: boolean;
	data: any[];

	constructor(
		private http: HttpClient,
		private dialog: MatDialog,
	) { }

	ngOnInit(): void {
		this.datatable();
	}

	datatable():void {
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
					'http://ps6-web.back.lc/api/mobile-sections',
					dataTablesParameters, {}
				).
				subscribe(response => {
					self.displayTable = true;
					self.data = response.data['data'];
					
					callback({
						recordsTotal: response.data['recordsTotal'],
						recordsFiltered: response.data['recordsFiltered'],
						data: self.data
					});
				});
			},
			columns: [{ title: 'ID', data: 'id' }, { title: 'Nume', data: 'name' }, { title: 'Slug', data: 'slug' }, { title: 'Actiuni', data: 'actions', orderable: false}],
		};
	}


	editSection(id): void{

		let element = this.data.find(obj => {
			return obj.id === id;
		});

		let dialogRef = this.dialog.open(MobileSectionEditComponent, {
			width: "500px",
			data: element
		}).afterClosed().subscribe(res => {
			if(res){
				let dataToSend = {
					id: id,
					name: res.data.name,
					slug: res.data.slug
				};

				element.name = res.data.name;
				element.slug = res.data.slug;
				
				this.http.put<any>(
					'http://ps6-web.back.lc/api/mobile-section',
					dataToSend,
				).subscribe(response => {
					console.log(response);
				});
			}
		});
		console.log(element);
	}

	addSection(): void{

		let dialogRef = this.dialog.open(MobileSectionAddComponent, {
			width: "500px"
		})
		.afterClosed()
		.subscribe(res => {
			if(res){
				let dataToSend = {
					name: res.data.name,
					slug: res.data.slug
				};
				this.http.post<any>(
					'http://ps6-web.back.lc/api/mobile-section',
					dataToSend,
				).subscribe(response => {
					console.log(response);
				});
			}
		});
	}

	
}
