import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})

export class UserListComponent implements OnInit {

	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject<any>();
	persons: any;

	constructor() { }

	ngOnInit(): void {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 2
		};

		this.persons = [
			{
				id: 1,
				name: "Andrei"
			},
			{
				id: 2,
				name: "John"
			},
			{
				id: 3,
				name: "Ion"
			}
		];
	}

}
