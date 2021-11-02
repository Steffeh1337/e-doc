import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sesizare-priority-list-edit',
  templateUrl: './sesizare-priority-list-edit.component.html',
  styleUrls: ['./sesizare-priority-list-edit.component.sass']
})

export class SesizarePriorityListEditComponent implements OnInit {

	editForm: FormGroup;
	submitted = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogRef: MatDialogRef<SesizarePriorityListEditComponent>,
		private fb: FormBuilder,
	) { }

	ngOnInit(): void {
		this.editForm = this.fb.group({
			name: [this.data.name, Validators.required],
			color: [this.data.color, Validators.required],
			time: [this.data.time, Validators.required],
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
