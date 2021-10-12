import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {

	constructor() { }

	async warningSwal(title, text, icon ) {
		return await Swal.fire({
			icon: icon,
			title: title,
			text: text,
			// footer: '<a href>Why do I have this issue?</a>'
			showCancelButton: false,
			showConfirmButton: true,
			confirmButtonText: 'Inchide'
		});
	}

	warningSwalWithSupport() {

	}
}
