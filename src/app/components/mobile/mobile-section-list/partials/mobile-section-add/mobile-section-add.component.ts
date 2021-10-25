import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mobile-section-add',
  templateUrl: './mobile-section-add.component.html',
  styleUrls: ['./mobile-section-add.component.sass']
})
export class MobileSectionAddComponent implements OnInit {

	addForm: FormGroup;
	submitted = false;

	constructor(
		private dialogRef: MatDialogRef<MobileSectionAddComponent>,
		private fb: FormBuilder,
	) { }

	ngOnInit(): void {
		this.addForm = this.fb.group({
			name: ['', Validators.required],
			slug: ['', Validators.required]
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
