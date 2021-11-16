import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-setari',
	templateUrl: './setari.component.html',
	styleUrls: ['./setari.component.sass']
})
export class SetariComponent implements OnInit {

	activeModule: string;

	constructor(
		public router: Router
	) { }


	ngOnInit(): void {
		this.activeModule = 'sesizare-type-list';
	}

	changeLocation(page): void{
		this.activeModule = page;
	}

	// isDirectieCompartimenteRoute(){
	// 	return this.router.url === 'directie-compartimente'
	// }

}
