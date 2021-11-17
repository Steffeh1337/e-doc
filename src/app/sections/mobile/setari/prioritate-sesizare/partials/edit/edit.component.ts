import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.sass']
})

export class EditComponent implements OnInit {

	editForm: FormGroup;
	submitted = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogRef: MatDialogRef<EditComponent>,
		private fb: FormBuilder,
	) { }

	ngOnInit(): void {
		this.editForm = this.fb.group({
			name: [this.data.el.name, Validators.required],
			color: [this.data.el.color, [ Validators.required, Validators.minLength(7), Validators.maxLength(7) ]],
			time: [this.data.el.time, Validators.required],
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
