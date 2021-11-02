import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {HttpClient, HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import { SesizareTypeListAddComponent } from 'src/app/components/sesizare/sesizare-type-list/partials/sesizare-type-list-add/sesizare-type-list-add.component';
import { SesizareTypeListEditComponent } from 'src/app/components/sesizare/sesizare-type-list/partials/sesizare-type-list-edit/sesizare-type-list-edit.component';
import { DataTableDirective } from 'angular-datatables';

import { Subject } from 'rxjs';


class DataTablesResponse{
	data: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}

@Component({
  selector: 'sesizare-type-list',
  templateUrl: './sesizare-type-list.component.html',
  styleUrls: ['./sesizare-type-list.component.sass']
})

export class SesizareTypeListComponent implements AfterViewInit, OnDestroy, OnInit {

	@ViewChild(DataTableDirective, {static: false})
	dtElement: DataTableDirective;
	dtTrigger: any = new Subject();

	dtOptions: DataTables.Settings = {};
	displayTable: boolean;
	data: any[];
	departments: any[];

	constructor(
		private http: HttpClient,
		private dialog: MatDialog
	) { }

	ngOnInit(): void {
		this.datatable();
		this.getDepartments();
	}

	ngAfterViewInit(): void {
		this.dtTrigger.next();
	}

	ngOnDestroy(): void {
		// Do not forget to unsubscribe the event
		this.dtTrigger.unsubscribe();
	}

	rerender(): void {
		this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
		  // Destroy the table first
		//   dtInstance.destroy();
			dtInstance.draw(false)
		  // Call the dtTrigger to rerender again
		//   this.dtTrigger.next();
		});
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
					'http://ps6-web.back.lc/api/sesizaretypes',
					dataTablesParameters, {}
				).
				subscribe(response => {
					self.displayTable = true;
					self.data = response.data['data'];

					callback({
						recordsTotal: response.data['recordsTotal'],
						recordsFiltered: response.data['recordsFiltered'],
						// data: response.data['data'],
						data: [],
					});
				});
			},
			columns: [{ title: 'ID', data: 'id_sesizare_type' }, { title: 'Nume', data: 'name' }, { title: 'Departament', data: 'id_department'}, { title: 'Actiuni', data: 'actions', orderable: false}],
		};
	}

	getDepartments() {
		this.http.get(
			'http://ps6-web.back.lc/api/departments-active',
		).subscribe(response => {
			this.departments = response['data']['departments-active'];
		})
	}

	returnDepartmentName(id): string{
		let departmentName = "";
		if(this.departments){
			this.departments.forEach(item => {
				if(item.id_department === id){
					if(item.name){
						departmentName = item.name;
					}
				}
			});
		}
		
		return departmentName;
	}

	editType(id): void{

		let element = this.data.find(obj => {
			return obj.id_sesizare_type === id;
		});

		let dataToDialog = {
			el: element,
			departments: this.departments
		};

		let dialogRef = this.dialog.open(SesizareTypeListEditComponent, {
			width: "500px",
			data: dataToDialog
		})
		.afterClosed()
		.subscribe(res => {
			if(res){
				let dataToSend = {
					id_sesizare_type: id,
					name: res.data.name,
					id_department: res.data.id_department,
				};
				
				this.http.put<any>(
					'http://ps6-web.back.lc/api/sesizare/type',
					dataToSend,
				)
				.subscribe(response => {
					if(response.data == 'success'){
						element.name = res.data.name;
						element.id_department = res.data.id_department;

						this.rerender();
					}
				});
			}
		});
	}

	

}
