import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.sass']
})
export class DialogExampleComponent implements OnInit {

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<DialogExampleComponent>) { }

	ngOnInit(): void {
	}

	cancel(){
		this.dialogRef.close({
			data: 'cancel'
		});
	}

	newCard(){
		this.dialogRef.close({
			data: 'newCard'
		});
	}

	exsCard(){
		
		// close first dialog and open a new one based on user's action
		this.dialogRef.close({
			data: 'existentCard'
		});
	}
}
