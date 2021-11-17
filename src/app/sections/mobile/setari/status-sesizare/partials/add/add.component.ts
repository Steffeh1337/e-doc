import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.sass']
})

export class AddComponent implements OnInit {

	addForm: FormGroup;
	submitted = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogRef: MatDialogRef<AddComponent>,
		private fb: FormBuilder,
	) { }


	ngOnInit(): void {
		this.addForm = this.fb.group({
			name: ['', Validators.required],
			color: ['', [ Validators.required, Validators.minLength(7), Validators.maxLength(7) ]],
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
