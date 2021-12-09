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
	types: any[];
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
			pagingType: "simple_numbers",
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
					self.types = response.data['data'];

					$(function(){
						$('.edit-type').on('click', function(){
							let id_sesizare_type = $(this).val();
							self.editType(id_sesizare_type);
						});
					});

					callback({
						recordsTotal: response.data['recordsTotal'],
						recordsFiltered: response.data['recordsFiltered'],
						data: response.data['data'],
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


	async editType(id){

		
		// const elementData = this.getSesizareType(id);

		// console.log(elementData);



		let dataToDialog = {
			// el: elementData,
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
						this.rerender();
					}
				});
			}
		});
	}

	// async getSesizareType(id){
	// 	var self = this

	// 	this.http.get('http://ps6-web.back.lc/api/sesizare/type/' + id)
	// 		.then((res) => {
	// 			// nu iti merge acest then, cum il am eu in ionic/angular web... deoarece nu folosesti service-uri + promises ca return.... implemeteaza service-ul !! first.. si dupa revii aici.. ca sa poti avea si un control de info... got it?
				
	// 		})
	// 		.catch((err) => {

	// 		})

	// 	this.http.get(
			
	// 	).subscribe(response => {
	// 		return response;
	// 		// return response['data'];
	// 	});
	// }
}
