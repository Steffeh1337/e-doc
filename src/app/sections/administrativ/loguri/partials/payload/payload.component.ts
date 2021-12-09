import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-payload',
  templateUrl: './payload.component.html',
  styleUrls: ['./payload.component.sass']
})

export class PayloadComponent implements OnInit {

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogRef: MatDialogRef<PayloadComponent>,
	) {
	}

	ngOnInit(): void {
		
		$(formatJson);

		function formatJson(){
			var element = $('#json')
			var obj = JSON.parse(element.text());
			element.html(JSON.stringify(obj, undefined, 2));
		}
		
	}


	cancel(){
		this.dialogRef.close();
	}

}
