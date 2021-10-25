import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import { MobileSectionContentAddComponent } from 'src/app/components/mobile/mobile-section-content/partials/mobile-section-content-add/mobile-section-content-add.component';
import { MobileSectionContentEditComponent } from 'src/app/components/mobile/mobile-section-content/partials/mobile-section-content-edit/mobile-section-content-edit.component';

class DataTablesResponse{
	data: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}

@Component({
  selector: 'mobile-section-content',
  templateUrl: './mobile-section-content.component.html',
  styleUrls: ['./mobile-section-content.component.sass']
})

export class MobileSectionContentComponent implements OnInit {

	dtOptions: DataTables.Settings = {};
	displayTable: boolean;
	data: any[];
	mobileSections: any[];

	constructor(
		private http: HttpClient,
		private dialog: MatDialog,
	) { }


	ngOnInit(): void {
		this.datatable();
		this.getMobileSections();
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
					'http://ps6-web.back.lc/api/mobile-section-pages',
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
			columns: [{ title: 'ID', data: 'id' }, { title: 'Titlu', data: 'title'}, { title: 'Slug', data: 'slug' }, { title: 'Actiuni', data: 'actions', orderable: false}],
		};
	}


	getMobileSections(){
		this.http.get(
			'http://ps6-web.back.lc/api/mobile-sections-active',
		).subscribe(response => {
			this.mobileSections = response['data'];
		})
	}

	editPage(id): void{
		let element = this.data.find(obj => {
			return obj.id === id;
		});

		let dataToDialog = {
			el: element,
			mobileSections: this.mobileSections
		};

		let dialogRef = this.dialog.open(MobileSectionContentEditComponent, {
			data: dataToDialog
		})
		.afterClosed()
		.subscribe(res => {
			if(res){
				let dataToSend = {
					id: id,
					title: res.data.title,
					slug: res.data.slug,
					content: res.data.content,
					sectiune_id: res.data.sectiune_id
				};

				element.title = res.data.title;
				element.slug = res.data.slug;
				element.content = res.data.content;
				element.sectiune_id = res.data.sectiune_id;

				this.http.put<any>(
					'http://ps6-web.back.lc/api/mobile-section-page',
					dataToSend,
				).subscribe(response => {
					console.log(response);
				});
			}
		});
	}
}
