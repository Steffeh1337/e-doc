import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sesizare-priority-list-add',
  templateUrl: './sesizare-priority-list-add.component.html',
  styleUrls: ['./sesizare-priority-list-add.component.sass']
})

export class SesizarePriorityListAddComponent implements OnInit {

	addForm: FormGroup;
	submitted = false;

	constructor(
		private dialogRef: MatDialogRef<SesizarePriorityListAddComponent>,
		private fb: FormBuilder,
	) { }

	ngOnInit(): void {
		this.addForm = this.fb.group({
			name: ['', Validators.required],
			color: ['', Validators.required],
			time: ['', Validators.required],
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
