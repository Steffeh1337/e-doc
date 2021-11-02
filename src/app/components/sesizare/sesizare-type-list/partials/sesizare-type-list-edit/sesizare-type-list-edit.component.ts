import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sesizare-type-list-edit',
  templateUrl: './sesizare-type-list-edit.component.html',
  styleUrls: ['./sesizare-type-list-edit.component.sass']
})

export class SesizareTypeListEditComponent implements OnInit {

	editForm: FormGroup;
	submitted = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogRef: MatDialogRef<SesizareTypeListEditComponent>,
		private fb: FormBuilder,
	) { }

	ngOnInit(): void {
		this.editForm = this.fb.group({
			name: [this.data.el.name, Validators.required],
			id_department: [this.data.el.id_department, Validators.required],
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
