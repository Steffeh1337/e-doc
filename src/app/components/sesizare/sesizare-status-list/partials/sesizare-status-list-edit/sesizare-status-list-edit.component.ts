import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sesizare-status-list-edit',
  templateUrl: './sesizare-status-list-edit.component.html',
  styleUrls: ['./sesizare-status-list-edit.component.sass']
})

export class SesizareStatusListEditComponent implements OnInit {

	editForm: FormGroup;
	submitted = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogRef: MatDialogRef<SesizareStatusListEditComponent>,
		private fb: FormBuilder,
	) { }

	ngOnInit(): void {
		this.editForm = this.fb.group({
			name: [this.data.name, Validators.required],
			color: [this.data.color, Validators.required],
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
