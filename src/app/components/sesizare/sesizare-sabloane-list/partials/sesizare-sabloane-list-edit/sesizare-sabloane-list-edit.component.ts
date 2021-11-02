import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sesizare-sabloane-list-edit',
  templateUrl: './sesizare-sabloane-list-edit.component.html',
  styleUrls: ['./sesizare-sabloane-list-edit.component.sass']
})

export class SesizareSabloaneListEditComponent implements OnInit {

	editForm: FormGroup;
	submitted = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogRef: MatDialogRef<SesizareSabloaneListEditComponent>,
		private fb: FormBuilder,
	) { }

	ngOnInit(): void {
		this.editForm = this.fb.group({
			name: [this.data.name, Validators.required],
			content: [this.data.content, Validators.required],
		});
	}

	cancel(){
		this.dialogRef.close();
	}

	onSubmit(){
		this.submitted = true;
		if(this.editForm.valid){
			this.dialogRef.close({
				data: this.editForm.value
			});
		}
	}

	get editFormControl(){
		return this.editForm.controls;
	}
}
