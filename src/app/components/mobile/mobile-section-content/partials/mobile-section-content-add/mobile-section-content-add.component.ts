import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mobile-section-content-add',
  templateUrl: './mobile-section-content-add.component.html',
  styleUrls: ['./mobile-section-content-add.component.sass']
})
export class MobileSectionContentAddComponent implements OnInit {

	addForm: FormGroup;
	submitted = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogRef: MatDialogRef<MobileSectionContentAddComponent>,
		private fb: FormBuilder,
	) { }

	ngOnInit(): void {
		this.addForm = this.fb.group({
			title: ['', Validators.required],
			slug: ['', Validators.required],
			sectiune_id: [1, Validators.required],
			content: ['', Validators.required]
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
