import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../general/storage.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(private localStorage: StorageService) { }

  user: any = {
		nume: '',
		prenume: '',
		email: '',
		telefon: '',
		f_nume: '',
		cnp: '',
		dialcode: '',
		isocode: 'ro',
		international_number: '',
		type: 0,
		ci_serie: '',
		ci_numar: '',
		f_reg_com: ''
	}
  
  ngOnInit(): void {
  }

}
