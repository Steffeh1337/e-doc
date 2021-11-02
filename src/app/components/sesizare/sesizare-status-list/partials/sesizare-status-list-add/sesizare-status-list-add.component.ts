import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sesizare-status-list-add',
  templateUrl: './sesizare-status-list-add.component.html',
  styleUrls: ['./sesizare-status-list-add.component.sass']
})
export class SesizareStatusListAddComponent implements OnInit {

	addForm: FormGroup;
	submitted = false;

	constructor(
		private dialogRef: MatDialogRef<SesizareStatusListAddComponent>,
		private fb: FormBuilder,
	) { }

	ngOnInit(): void {
		this.addForm = this.fb.group({
			name: ['', Validators.required],
			color: ['', Validators.required],
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
