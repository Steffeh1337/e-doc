import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example-card',
  templateUrl: './dialog-example-card.component.html',
  styleUrls: ['./dialog-example-card.component.sass']
})
export class DialogExampleCardComponent implements OnInit {

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<DialogExampleCardComponent>) { }

	ngOnInit(): void {
	}

	cancel(){
		this.dialogRef.close({
			data: 'cancel'
		});
	}
	chooseCard(id){
		this.dialogRef.close({
			data: id
		});
	}

}
