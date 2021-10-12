import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example-add-card',
  templateUrl: './dialog-example-add-card.component.html',
  styleUrls: ['./dialog-example-add-card.component.sass']
})
export class DialogExampleAddCardComponent implements OnInit {

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<DialogExampleAddCardComponent>) { }

	ngOnInit(): void {
	}

	cancel(){
		this.dialogRef.close({
			data: 'cancel'
		});
	}
	
	sayYes(){
		this.dialogRef.close({
			data: '1'
		});
	}

	sayNo(){
		this.dialogRef.close({
			data: '0'
		});
	}

}
