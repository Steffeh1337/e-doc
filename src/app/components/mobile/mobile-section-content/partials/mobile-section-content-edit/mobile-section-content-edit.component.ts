import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mobile-section-content-edit',
  templateUrl: './mobile-section-content-edit.component.html',
  styleUrls: ['./mobile-section-content-edit.component.sass']
})

export class MobileSectionContentEditComponent implements OnInit {

	editForm: FormGroup;
	submitted = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogRef: MatDialogRef<MobileSectionContentEditComponent>,
		private fb: FormBuilder,
	) { }

	ngOnInit(): void {
		this.editForm = this.fb.group({
			title: [this.data.el.title, Validators.required],
			slug: [this.data.el.slug, Validators.required],
			sectiune_id: [this.data.el.sectiune.name, Validators.required],
			content: [this.data.el.content, Validators.required]
		});
		console.log(this.data.el.sectiune.name);
	}

	cancel(){
		this.dialogRef.close();
	}

	onSubmit(){
		this.submitted = true;
		console.log(this.editForm.controls);
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
