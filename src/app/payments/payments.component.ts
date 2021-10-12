import { Component, OnInit, NgZone, ViewChild, TemplateRef } from '@angular/core';

import { PaymentsService } from '../services/payments.service';
import { NotificationService } from '../general/notification.service';

import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DialogExampleCardComponent } from '../dialog-example-card/dialog-example-card.component';
import { DialogExampleAddCardComponent } from '../dialog-example-add-card/dialog-example-add-card.component';

import { environment } from '../../environments/environment';

import Swal from 'sweetalert2';

import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';
import { faCheckSquare, faSquare, faTimesCircle, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare as CheckSquareSolid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.sass']
})

export class PaymentsComponent implements OnInit {

    faCheckSquare : any = faCheckSquare
    faSquare : any = faSquare
    faTimesCircle : any = faTimesCircle
    faPlusCircle : any = faPlusSquare

    faSquareSolid : any = CheckSquareSolid

    errorTitle: string = environment.config.customNotifications.headers.error;
	errorIcon: string = environment.config.customNotifications.icons.error;
	errorType: string = environment.config.customNotifications.icons.error;

    successTitle: string = environment.config.customNotifications.headers.success;
	successIcon: string = environment.config.customNotifications.icons.success;
	successType: string = environment.config.customNotifications.icons.success;

	alertLabels: any = {};

    viewPanel: number = 1;
	loaded: any = 0;

	priorityIds: any = [];
	priorityVal: any = [];
	prioritiesOnTaxes: any = [];

	taxes: any = [];
	savedCards: any = [];

	categories: any = [];
	showDgitl: boolean = true;
	showDMU: boolean = true;

	batchPayment: any = {
		'bills': [],
		'bill_ids': [],
		'total': 0,
		'records': 0
	};

	tipTaxePriorities: any = {
		'dgitl': '',
		'dmu': ''
	};

	categoryLabel: any = {
		1: 'dgitl',
		2: 'dmu'
	};

	cantPayLabel1: string = '';
	cantPayLabel2: string = '';

	successUrl: string = environment.app.paymentUrls.successUrl;
	failUrl: string = environment.app.paymentUrls.errorUrl;

	successPaymentLabel: string = '';
	paymentAlertMsg: string = '';

	batchPaymentChosen: any = [];

	pageinitialized: number = 0;

	@ViewChild('ngxLoading') ngxLoadingComponent: NgxLoadingComponent;
	@ViewChild('customLoadingTemplate') customLoadingTemplate: TemplateRef<any>;

	public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
	public loading = false;
	public loadingTemplate: TemplateRef<any>;

    constructor(
		private paymentService: PaymentsService,
        private notificationService: NotificationService,
		private zone: NgZone,
		private dialog: MatDialog,
		private activatedRoute: ActivatedRoute,
		private router: Router
	){
		this.categories = [
			{
				id: 1,
				name: 'dgitl',
				class: 'dgitl',
				title: 'Taxe si Impozite',
				expanded: true,
				checked: false
			},
			{
				id: 2,
				name: 'dmu',
				class: 'dmu',
				title: 'Parcări',
				expanded: true,
				checked: false
			}
		];
	}


    ngOnInit(): void {
        this.getTaxesList();

		this.activatedRoute.queryParams.subscribe(params => {
			let afterPaymentKey = (typeof params['key'] !== 'undefined' ? params['key'] : false);

			if(afterPaymentKey == 'success') {
				let message = 'Plata a fost confirmată cu succes. Înregistrarea plății poate dura până la 3 zile.';
				this.notificationService.warningSwal(
					this.successTitle, message, this.successIcon
				).then((res) => {
					this.router.navigate([], { queryParams: {} });
				});

				return false;
			} else if(afterPaymentKey == 'fail') {
				let message = 'Ne pare rău, dar am întampinat o problemă în procesarea plății dvs. Vă rugăm să reîncercați.';
				this.notificationService.warningSwal(
					this.errorTitle, message, this.errorIcon
				).then((res) => {
					this.router.navigate([], { queryParams: {} });
				});

				return false;
			}
		});
	}


	toggleTemplate(): void {
		if (this.loadingTemplate) {
			this.loadingTemplate = null;
		} else {
			this.loadingTemplate = this.customLoadingTemplate;
		}
	}


    showPanel(index) {
        this.viewPanel = index;
	}


	async makePayment(saveCard){

		var self = this;
		self.loading = true;
		self.batchPaymentChosen = (typeof(self.batchPaymentChosen) !== 'undefined') ? self.batchPaymentChosen : self.batchPayment;

		self.paymentService.requestPayment(self.batchPaymentChosen, saveCard).then(async (res) => {
			if(res !== null && typeof res.errors !== 'undefined' && res.errors == false && typeof res.data !== 'undefined' && typeof res.data.link !== 'undefined'){
				// success, now send to link
				self.loading = false;
				window.open(res.data.link, "_blank");
			}
			else{
				self.loading = false;
				let errorMessage = 'Am întâmpinat o eroare, vă rugăm reîncercați';
				await self.notificationService.warningSwal(
					self.errorTitle, errorMessage, self.errorIcon
				);

				return false;
			}
		})
	}


	async choosePaymentCard(item){

		var self = this;
		// if (item.priority == 0){
		// 	self.loading = false;
		// 	let errorMessage = 'Pentru a efectua această plată este necesar ca toate plățile anterioare să fie achitate';
		// 	await self.notificationService.warningSwal(
		// 		self.errorTitle, errorMessage, self.errorIcon
		// 	);

		// 	return false;
		// }
		// else if (item.priority == 1 && item.bill_checked){
		// 	self.loading = false;
		// 	let errorMessage = 'Această plată a fost deja selectată';
		// 	await self.notificationService.warningSwal(
		// 		self.errorTitle, errorMessage, self.errorIcon
		// 	);

		// 	return false;
		// }
	
		let batchPayment = {
			'bills': [],
			'total': item.bill_debit,
			'records': 1
		};

		batchPayment.bills.push(item);
		self.batchPaymentChosen = batchPayment;

		let dialogRef = self.dialog.open(DialogExampleComponent);

		dialogRef.afterClosed().subscribe(res => {

			if(res.data == 'newCard'){

				let dialogRefCard = self.dialog.open(DialogExampleAddCardComponent);

				dialogRefCard.afterClosed().subscribe(res => {
					let value = res.data;

					if(value == 1){
						
						// salveaza card
						self.makePayment(true);
					}
					else if (value == 0){
						// nu salveaza card
						self.makePayment(false);
					}
				})
			}
			else if(res.data == 'existentCard'){

				let dialogRefCard = self.dialog.open(DialogExampleCardComponent, {
					data: self.savedCards
				})

				dialogRefCard.afterClosed().subscribe(res => {
					let chosenCardId = res.data;

                    // here, we need to make our payment on recurenta
                    self.processPaymentsRecurente(chosenCardId)
				})
			}
		})
	}


	onChoosePayment(){

		let self = this;

		// salvam batchPayment in batchPaymentChosen
		self.batchPaymentChosen = self.batchPayment;
		
		let dialogRef = self.dialog.open(DialogExampleComponent);

		dialogRef.afterClosed().subscribe(res => {

			if(res.data == 'newCard'){

				let dialogRefCard = self.dialog.open(DialogExampleAddCardComponent);

				dialogRefCard.afterClosed().subscribe(res => {
					let value = res.data;

					if(value == 1){
						// salveaza card
						self.makePayment(true);
					}
					else if (value == 0){
						// nu salveaza card
						self.makePayment(false);
					}
				})
			}
			else if(res.data == 'existentCard'){

				let dialogRefCard = self.dialog.open(DialogExampleCardComponent, {
					data: self.savedCards
				})

				dialogRefCard.afterClosed().subscribe(res => {
					let chosenCardId = res.data;

                    // here, we need to make our payment on recurenta
                    self.processPaymentsRecurente(chosenCardId)
				})
			}
		})
	}


	checkPrioritiesByLevel(elem, item, priority) {
		var self = this;
		return new Promise(async (resolve, reject) => {
			let prioritiesIndexes = Object.keys(priority.val).reverse().map((x) => { return parseInt(x); });
			if (prioritiesIndexes.length == 1) {
				// we are ok here, nothing much to solve
				resolve(elem);
			} else {
				await prioritiesIndexes.forEach((i) => {
					if (i > 0 && priority.ids[i].length > 0 && priority.ids[i][0] !== 0) {
						// now process filter
						// const filteredArray = priority.ids[i].filter(value => self.batchPayment.bill_ids.includes(value));
						const filteredArray = self.batchPayment.bill_ids.filter(value => priority.ids[i].includes(value));
						if (filteredArray.length !== priority.ids[i].length) {
							reject(self.tipTaxePriorities[this.categoryLabel[item.type]]);
						} else {
							console.log(filteredArray, 'we found this');
						}
					}
				})
				resolve(item);
			}
			// resolve(item)
		})
	}


	checkPriorities(elem, item) {
		var self = this;
		return new Promise((resolve, reject) => {
			if (item.bill_checked == false) {
				resolve(elem);
			} else
				switch (elem.type) {
					case 1:
						if (elem.priority > item.priority && !self.batchPayment.bill_ids.includes(elem.bill_id)) {
							reject(self.cantPayLabel1 + item.description + self.cantPayLabel2);
						} else {
							resolve(elem);
						}
						break;

					default:
						resolve(elem);
						break;
				}
		})
	}


	async getTaxesList() {

		var self = this;
		self.toggleTemplate();
		self.loading = true;

        try{
            self.paymentService.getTaxes()
                .then(async (res) => {
                    let response = (typeof res.status_code !== 'undefined' ? res : res.error)
                    if (typeof response.status_code !== 'undefined') {
                        if (response.status_code == 200 && typeof response.data !== 'undefined') {

							self.loading = false;

                            self.taxes = response.data;
                            self.loaded = 1;

                            self.taxes.total = response.data.total;
                            self.taxes.total_bills = response.data.total_bills;

                            self.prioritiesOnTaxes = response.data.priorities;
                            self.priorityIds = response.data.priorities.ids;
                            self.priorityVal = response.data.priorities.val;
							
                            self.getCards();
                            return false;

                        } else {

							self.loading = false;

                            let errorMessage = environment.config.customNotifications.generalMessages.error;
                            response.errors.message.forEach(function (msg) {
                                errorMessage = msg;
                            })
                            await self.notificationService.warningSwal(
								self.errorTitle, errorMessage, self.errorIcon
							);

                            return false;
                        }

                    } else {

						self.loading = false;

                        let errorMessage = environment.config.customNotifications.generalMessages.error;
						await self.notificationService.warningSwal(
							self.errorTitle, errorMessage, self.errorIcon
						);

                        return false
                    }
                })
                .catch(async err => {

					self.loading = false;

                    let errorMessage = environment.config.customNotifications.generalMessages.error;
                    await self.notificationService.warningSwal(
                        self.errorTitle, errorMessage, self.errorIcon
                    );

                    return false;
                })
        } catch (err) {

			self.loading = false;
            await self.notificationService.warningSwal(this.errorTitle, 'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.', this.errorIcon);
        }
	}


	async getCards() {

		var self = this;

        try{
            self.paymentService.getCards()
                .then(async (res) => {
                    let response = (typeof res.status_code !== 'undefined' ? res : res.error)
                    if (typeof response.status_code !== 'undefined') {
                        if (response.status_code == 200 && typeof response.data !== 'undefined') {

                            self.savedCards = response.data;

                            return false;

                        } else {
                            let errorMessage = environment.config.customNotifications.generalMessages.error;
                            response.errors.message.forEach(function (msg) {
                                errorMessage = msg;
                            })
                            await self.notificationService.warningSwal(
                                self.errorTitle, errorMessage, self.errorIcon
                            );

                            return false;
                        }

                    } else {
                        let errorMessage = environment.config.customNotifications.generalMessages.error;
                        await self.notificationService.warningSwal(
                            self.errorTitle, errorMessage, self.errorIcon
                        );

                        return false
                    }
                })
                .catch(async err => {
                    let errorMessage = environment.config.customNotifications.generalMessages.error;
                    await self.notificationService.warningSwal(
                        self.errorTitle, errorMessage, self.errorIcon
                    );

                    return false;
                })
        } catch (err) {
            await self.notificationService.warningSwal(this.errorTitle, 'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.', this.errorIcon)
        }
	}


    async processPaymentsRecurente(card) {

		var self = this;

		self.batchPaymentChosen = self.batchPayment;

        try{
            self.paymentService.processPaymentsRecurente(self.batchPaymentChosen, card)
                .then(async (res) => {
                    let response = (typeof res.status_code !== 'undefined' ? res : res.error)
                    if (typeof response.status_code !== 'undefined') {
                        if (response.status_code == 200 && typeof response.data !== 'undefined') {

                           self.getTaxesList();
                           self.getCards();
                           self.batchPaymentChosen = [];

                            return false;

                        } else {
                            let errorMessage = environment.config.customNotifications.generalMessages.error;
                            response.errors.message.forEach(function (msg) {
                                errorMessage = msg;
                            })
                            await self.notificationService.warningSwal(
                                self.errorTitle, errorMessage, self.errorIcon
                            );

                            return false;
                        }

                    } else {
                        let errorMessage = environment.config.customNotifications.generalMessages.error;
                        await self.notificationService.warningSwal(
                            self.errorTitle, errorMessage, self.errorIcon
                        );

                        return false
                    }
                })
                .catch(async err => {
                    let errorMessage = environment.config.customNotifications.generalMessages.error;
                    await self.notificationService.warningSwal(
                        self.errorTitle, errorMessage, self.errorIcon
                    );

                    return false;
                })
        } catch (err) {
            await self.notificationService.warningSwal(this.errorTitle, 'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.', this.errorIcon)
        }
	}


	updateBillsGeneralToPay(item) {

		var self = this;

        item.checked = !item.checked

		self.zone.run(() => {
			let index = -1;
			// setTimeout(function() {
			self.taxes.items[item.name].forEach(function (bill, key) {

				switch (item.checked) {

					case true:
						// add all bills if found
						if (self.batchPayment.bills.indexOf(bill) == -1) {
							self.batchPayment.bills.push(bill);
							self.batchPayment.total += parseFloat(bill.bill_debit);
						}
						self.taxes.items[item.name][key].bill_checked = true;
						// bill.bill_checked = true

						break;

					case false:
						// disable all bills from here
						if (self.batchPayment.bills.indexOf(bill) > -1) {
							index = self.batchPayment.bills.indexOf(bill);
							self.batchPayment.bills.splice(index, 1);
							self.batchPayment.total -= parseFloat(bill.bill_debit);
						}
						self.taxes.items[item.name][key].bill_checked = false;
						// bill.bill_checked = false
						break;

					default:
						// nothing to do here
						break;
				}
			});

			// }, 150)
		});
	}


	async updateBillsToPayV2(index, item) {

		var self = this;

		let typeX = (item.type == 1 ? 'dgitl' : 'dmu');

		// trebuie sa actualizez respectivul checkbox
		item.bill_checked = !item.bill_checked;

		// trebuie sa verific daca apartine de o prioritate scazuta?
		const promisesArray: any[] = [];
		this.taxes.items[typeX].forEach(function (elem) {
			promisesArray.push(self.checkPriorities(elem, item));
		})

		await Promise.all(promisesArray)
			.then((res) => {
				// is allowed to check
				// please update the multiPaymentZone
				if (self.batchPayment.bills.indexOf(item) == -1) {
					self.batchPayment.bills.push(item);
					self.batchPayment.total += parseFloat(item.bill_debit);
					self.batchPayment.bill_ids.push(item.bill_id);
				} else {
					// please remove from list
					let index = self.batchPayment.bills.indexOf(item)
					self.batchPayment.bills.splice(index, 1)
					self.batchPayment.total -= parseFloat(item.bill_debit);
					index = self.batchPayment.bill_ids.indexOf(item.bill_id);
					self.batchPayment.bill_ids.splice(index, 1);
				}

				self.batchPayment.total = (self.batchPayment.bills.length == 0 ? 0 : self.batchPayment.total);
				// please check the global selection element for payment, then remove the not priorities
			}, async (firstErr) => {
				// error here
				// update again this stuff
				item.bill_checked = !item.bill_checked;
				await self.taxes.items[typeX].forEach((item) => { 
					item.bill_checked = false ;
				})

				await self.taxes.items[typeX].forEach((bill) => {
					let index = self.batchPayment.bills.indexOf(item);
					if (index > -1) {
						self.batchPayment.bills.splice(index, 1);
						self.batchPayment.total -= parseFloat(item.bill_debit);
						index = self.batchPayment.bill_ids.indexOf(item.bill_id);
						self.batchPayment.bill_ids.splice(index, 1);
					}
				})

				self.batchPayment.total = (self.batchPayment.bills.length == 0 ? 0 : self.batchPayment.total);

				self.categories.forEach((row) => {
					if (row.id == item.type) {
						row.checked = false;
					}
				})

				let errorMessage = 'Pentru a efectua această plată este necesar ca toate plățile anterioare să fie achitate';
				await self.notificationService.warningSwal(
					self.errorTitle, errorMessage, self.errorIcon
				);

				return false;
			})
			.then(async () => {
				// here we check if all selected respect ids
				let priorityData = self.prioritiesOnTaxes[typeX];
				const promisesArrayLvl: any[] = [];
				await self.taxes.items[typeX].forEach((row) => {
					if (row.bill_checked){
						promisesArrayLvl.push(this.checkPrioritiesByLevel(row, item, priorityData));
					}
				})

				await Promise.all(promisesArrayLvl)
					.then((res) => {
						// we are fine now, dismiss
					}, async (err) => {
						await self.taxes.items[typeX].forEach((item) => {
							item.bill_checked = false;

							let index = self.batchPayment.bills.indexOf(item)
							if (index > -1) {
								self.batchPayment.bills.splice(index, 1);
								self.batchPayment.total -= parseFloat(item.bill_debit);
								index = self.batchPayment.bill_ids.indexOf(item.bill_id);
								self.batchPayment.bill_ids.splice(index, 1);
							}
						})
						// general error here
						let errorMessage = 'Pentru a efectua această plată este necesar ca toate plățile anterioare să fie achitate';
						await self.notificationService.warningSwal(
							self.errorTitle, errorMessage, self.errorIcon
						);
						
						self.batchPayment.total = (self.batchPayment.bills.length == 0 ? 0 : self.batchPayment.total);

						self.categories.forEach((row) => {
							if (row.id == item.type) {
								row.checked = false;
							}
						})
						return false;
					})
			})
	}


	async removeCard(row) {
		var self = this;

		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn btn-success btn-lg m-3',
				cancelButton: 'btn btn-danger btn-lg m-3'
			},
			buttonsStyling: false
		});

		swalWithBootstrapButtons.fire({
			title: 'Sunteți sigur?',
			text: 'O să ștergeți cardul ' + row.card_type+ ' cu numarul ' + row.mcard + ' exp: ' + row.card_exp,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Confirm',
			cancelButtonText: 'Anulați',
			reverseButtons: true
		}).then((result) => {

			if(!result.isConfirmed){
				return false;
			}
			
			try{
				self.paymentService.removeCard(row.id)
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data !== 'undefined') {
                            // success
                            await self.getCards()
							let successMessage = "Cardul a fost șters cu succes";
							await self.notificationService.warningSwal(
								self.successTitle, successMessage, self.successIcon
							);

							return false;

						} else {
							let errorMessage = "Eroare la ștergerea cardului";
							response.errors.message.forEach(function (msg) {
								errorMessage = msg;
							})
							await self.notificationService.warningSwal(
								self.errorTitle, errorMessage, self.errorIcon
							);

							return false;
						}

					} else {
						let errorMessage = environment.config.customNotifications.generalMessages.error;
						await self.notificationService.warningSwal(
							self.errorTitle, errorMessage, self.errorIcon
						);

						return false
					}
				})
				.catch(async err => {
					let errorMessage = environment.config.customNotifications.generalMessages.error;
					await self.notificationService.warningSwal(
						self.errorTitle, errorMessage, self.errorIcon
					);

					return false;
				})
					
			} catch (err) {
				console.log(err);
			}
		});
	}


	viewBoxPayments(index) {
		this.categories.forEach(function (item) {
			if (item == index){
				item.expanded = !item.expanded;
			}
		});
	}
}
