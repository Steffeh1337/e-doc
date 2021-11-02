import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sesizare-sabloane-list-add',
  templateUrl: './sesizare-sabloane-list-add.component.html',
  styleUrls: ['./sesizare-sabloane-list-add.component.sass']
})

export class SesizareSabloaneListAddComponent implements OnInit {

	addForm: FormGroup;
	submitted = false;
	
	constructor(
		private dialogRef: MatDialogRef<SesizareSabloaneListAddComponent>,
		private fb: FormBuilder,
	) { }

	ngOnInit(): void {
		this.addForm = this.fb.group({
			name: ['', Validators.required],
			content: ['', Validators.required],
		});
	}

	cancel(){
		this.dialogRef.close();
	}

	onSubmit(){
		this.submitted = true;
		if(this.addForm.valid){
			this.dialogRef.close({
				data: this.addForm.value
			});
		}
	}

	get addFormControl(){
		return this.addForm.controls;
	}
}
