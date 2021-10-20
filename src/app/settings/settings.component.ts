import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

	activeModule: string;

	constructor() { }

	ngOnInit(): void {
		this.activeModule = 'user-list';
	}

	changeLocation(page): void{
		this.activeModule = page;
		console.log(page);
	}

}
