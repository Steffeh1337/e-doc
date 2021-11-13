import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-setari',
	templateUrl: './setari.component.html',
	styleUrls: ['./setari.component.sass']
})
export class SetariComponent implements OnInit {

	activeModule: string;

	constructor() { }


	ngOnInit(): void {
		this.activeModule = 'sesizare-type-list';
	}

	changeLocation(page): void{
		this.activeModule = page;
	}

}
