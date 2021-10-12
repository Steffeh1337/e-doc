import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { DgitlService } from '../dgitl.service'
import { AuthService } from '../../auth-module/auth.service'
import { NotificationService } from '../../general/notification.service'

import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ErrorStateMatcher } from '@angular/material/core';

import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { environment } from '../../../environments/environment'

import { StorageService } from '../../general/storage.service'

import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons'

import { cloneDeep, random } from 'lodash-es';
import {
	GlobalConfig,
	ToastrService,
	ToastContainerDirective,
	ToastNoAnimation,
} from 'ngx-toastr';
import { ControlsModule } from 'src/app/DemoPages/Forms/Elements/controls/controls.module';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}


@Component({
	selector: 'app-cf-generate',
	templateUrl: './cf-generate.component.html',
	styleUrls: ['./cf-generate.component.sass']
})
export class CfGenerateComponent implements OnInit {

    // icons
    faCheckSquare : any = faCheckSquare
    faSquare : any = faSquare

    matricoleOperatii : any = [
        {
            id: -1,
            name: '-- Alegeti --'
        },
        {
            id: 0,
            name: 'Afla Status'
        },
        {
            id: 1,
            name: 'Emitere'
        },
        {
            id: 2,
            name: 'Reemitere'
        }
    ]

    matricoleScopuriCF : any = [
        {
            id: -1,
            name: '-- Alegeti --'
        },
        {
            id: 0,
            name: 'Cu Specificatie'
        },
        {
            id: 1,
            name: 'Vanzare'
        },
        {
            id: 2,
            name: 'Succesiune'
        }
    ]

    matricoleYesNo : any = [
        {
            id: 0,
            name: 'NU'
        },
        {
            id: 1,
            name: 'DA'
        }
    ]

	// general error
	errorTitle: string = environment.config.customNotifications.headers.error
	errorIcon: string = environment.config.customNotifications.icons.error
	errorType: string = environment.config.customNotifications.icons.error
	// general success alert
	successTitle: string = environment.config.customNotifications.headers.success
	successIcon: string = environment.config.customNotifications.icons.success
	successType: string = environment.config.customNotifications.icons.success

	@ViewChild('ngxLoading') ngxLoadingComponent: NgxLoadingComponent;
	@ViewChild('customLoadingTemplate') customLoadingTemplate: TemplateRef<any>;
	public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
	public loading = false;
	public loadingTemplate: TemplateRef<any>;
	matcher = new MyErrorStateMatcher();

	private lastInserted: number[] = [];
	options: GlobalConfig;

	tipPersoana: string = ''
	step: number = 0

	// tipPersoanaINT : any = {
	// 	'persoanaFizica' : 1,
	// 	'persoanaJuridica' : 2
	// }

	tipPersoanaINT: any = {
		1: 'persoanaFizica',
		2: 'persoanaJuridica'
	}

	listShow: any = []
	sectionChosen: any = null
	sectionId: number = null

    search: any = {
        matricole_text: '',
        matricole_all: false,
        loaded: [],
        operatie: -1,
        scopcf: -1,
        fara_patrimoniu: 0,
        specificatii: '',
        alte_mentiuni: '',
        persoanaId: 0
    }

	form: any = []

	loaded: number = 0

	formData: FormGroup

	generalError: string = null

	loadedMatricole: number = 0
	matricole: any = []

    page = 1;
    pageSize = 10;
    collectionSize: any = 0;
    data: any = []

	user: any = {
		nume: '',
		prenume: '',
		email: '',
		telefon: '',
		f_nume: '',
		cnp: '',
		dialcode: '',
		isocode: 'ro',
		international_number: '',
		type: 0,
		ci_serie: '',
		ci_numar: '',
		f_reg_com: ''
	}

	subsemnatul: any = {
		source_adresa: '-1',
		source_sediu_social: '-1',
		adresa_domiciliu: {},
		adresa_sediu_social: {}
	}

	listAddresses: any = []

	constructor(
		private dgitlService: DgitlService,
		private authService: AuthService,
		private notificationService: NotificationService,
		public toastr: ToastrService,
		private modalService: NgbModal,

		private localStorage: StorageService,
        private router : Router
	) {
		this.options = this.toastr.toastrConfig;
	}

	ngOnInit(): void {
		var self = this
		const data = this.localStorage.getString(environment.config.userKey)
		data.then((res: any) => {
			let json = JSON.parse(res)

			if (json.cnp == null || json.cnp.toString().length < 2) {
				// please cut the crap
				self.generalError = 'Ne pare rau, dar nu aveti un CNP/CUI asociat contului dvs. Va rugam sa va adaugati un CNP/CUI pentru a putea debloca Registratura Online DGITL S4.'
				return false
			}

			// dev
			// json.type = 2

			self.user.nume = json.nume
			self.user.prenume = json.prenume
			self.user.email = json.email
			self.user.telefon = parseInt(json.telefon).toString()
			self.user.cnp = json.cnp

			self.user.dialcode = json.dialcode
			self.user.isocode = json.isocode
			self.user.international_number = json.international_number

			self.user.ci_serie = json.ci_serie
			self.user.ci_numar = json.ci_numar

			self.user.type = json.type

			self.tipPersoana = ([1, 2].includes(json.type) ?
				self.tipPersoanaINT[json.type]
				: (self.user.cnp.toString().length < 13) ? self.tipPersoanaINT[2] : self.tipPersoanaINT[1])

			if (typeof json.f_nume !== 'undefined') {
				self.user.f_nume = json.f_nume
				self.user.f_reg_com = json.f_reg_com
			} else {
				self.user.f_reg_com = ''
				self.user.f_nume = ''
			}

			self.listAddress()
			self.getMatricole()
		})
	}

	updateAdresaSelected($ev, key) {
		var self = this
		console.log($ev, key, 'check here')
	}

	async listAddress() {
		var self = this

		try {
			self.authService.addressList()
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data !== 'undefined') {
							self.listAddresses = response.data
							self.loaded = 1
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
						// add sentry
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

					return false
				})

		} catch (err) {
			console.log(err)
			await self.notificationService.warningSwal(this.errorTitle, 'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.', this.errorIcon)
		}
	}

    checkForUpdatesDT() {
        console.log(this.search)
        setTimeout(() => {
            this.refreshData()
        },100)
    }

    refreshData() {
        var self=  this
        self.loadedMatricole = 1

        if(typeof this.search.matricole_text !== 'undefined' && this.search.matricole_text !== null && 
        this.search.matricole_text !== '') {
            this.data = this.matricole
            .filter((item) => {
                return (item.numeTip.toLowerCase().includes(self.search.matricole_text.toLowerCase()) || 
                item.adresa.toLowerCase().includes(self.search.matricole_text.toLowerCase()) || 
                item.descriere.toLowerCase().includes(self.search.matricole_text.toLowerCase()))
            })
            .map((data, i) => ({ id: i + 1, ...data }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
        }else {
            this.data = this.matricole
                .map((data, i) => ({ id: i + 1, ...data }))
                .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
        }
    }

	async getMatricole() {
		var self = this

		try {
			self.dgitlService.cfGetMatricole()
				.then(async (res) => {
					let response = (typeof res.status_code !== 'undefined' ? res : res.error)
					if (typeof response.status_code !== 'undefined') {
						if (response.status_code == 200 && typeof response.data !== 'undefined') {
							self.matricole = response.data.matricole
                            self.collectionSize = response.data.matricole.length
                            self.search.persoanaId = response.data.persoanaId
                            self.refreshData()
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
						// add sentry
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

					return false
				})

		} catch (err) {
			console.log(err)
			await self.notificationService.warningSwal(this.errorTitle, 'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.', this.errorIcon)
		}
	}

    checkAllMatricole() {
        this.search.matricole_all = !this.search.matricole_all
        this.checkAll()
    }

    checkAll() {
        var self = this
        self.search.loaded = []
        if(self.search.matricole_all) {
            // true
            
            self.matricole.forEach((item) => {
                self.search.loaded.push(item.matricola)
            })
        }
    }

    toggleMatricola(row) {
        if(this.search.loaded.includes(row.matricola)) {
            let index = this.search.loaded.indexOf(row.matricola)
            this.search.loaded.splice(index,1)
        }else {
            this.search.loaded.push(row.matricola)
        }

        this.checkIfAll()
    }

    checkIfAll() {
        this.search.matricole_all = (this.search.loaded.length == this.matricole.length)
    }

    async submit() {

        try {
            // please start to process information
            var self = this
            this.loading = true

            // PF STUFF
            if (this.subsemnatul.source_adresa == -1) {
                self.loading = false
                await self.notificationService.warningSwal(this.errorTitle, 'Adresa Domiciliu este obligatorie', this.errorIcon)
                return false
            }

            if (this.user.type == 2 && this.subsemnatul.source_adresa_sediu == -1) {
                // PJ
                self.loading = false
                await self.notificationService.warningSwal(this.errorTitle, 'Adresa Sediu Social este obligatoriu', this.errorIcon)
                return false
            }

            
            if(this.search.loaded.length == 0) {
                // no matricole selected
                self.loading = false
                await self.notificationService.warningSwal(this.errorTitle, 'Nu ati ales nici o matricola', this.errorIcon)
                return false
            }

            if(this.search.operatie == -1) {
                self.loading = false
                await self.notificationService.warningSwal(this.errorTitle, 'Trebuie sa alegeti tipul de Operatie', this.errorIcon)
                return false
            }

            if(this.search.scopcf == -1) {
                self.loading = false
                await self.notificationService.warningSwal(this.errorTitle, 'Trebuie sa alegeti scopul Certificatului Fiscal', this.errorIcon)
                return false
            }

            if(this.search.fara_patrimoniu == -1) {
                self.loading = false
                await self.notificationService.warningSwal(this.errorTitle, 'Trebuie sa specificati daca doriti sau nu lista de patrimoniu', this.errorIcon)
                return false
            }

            console.log(this.search, this.subsemnatul, 'is it?')

            const data = Object.assign(this.subsemnatul, this.search, { matricole: self.matricole})
		    console.log(data, 'is it?')

            this.dgitlService.saveSolicitareCertificatFiscal(data)
			.then(async (res) => {
				let response = (typeof res.status_code !== 'undefined' ? res : res.error)
				console.log(response)
				if (typeof response.status_code !== 'undefined') {
					if (response.status_code == 200 && typeof response.data !== 'undefined') {

						self.loading = false
						// self.resetForm()
						await self.notificationService.warningSwal(
							self.successTitle,  'Solicitarea dvs a fost trimisa cu succes. Numarul solicitarii este #' + response.data.id, self.successIcon
						).then(() => {
                            self.router.navigateByUrl('dgitl-solicitari', { replaceUrl: true })
                        });

                        // console.log(response, 'success ??')
						return false;

					} else {
						let errorMessage = environment.config.customNotifications.generalMessages.error;
						response.errors.message.forEach(function (msg) {
							errorMessage = msg;
						})
						
						console.log('here??')
						await self.notificationService.warningSwal(
							self.errorTitle, errorMessage, self.errorIcon
						);

						self.loading = false
						return false;
					}

				} else {
					// add sentry
					console.log('here??2')
					let errorMessage = environment.config.customNotifications.generalMessages.error;
					self.loading = false
					await self.notificationService.warningSwal(
						self.errorTitle, errorMessage, self.errorIcon
					);

					return false
				}
			})
			.catch(async err => {
				self.loading = false
				console.log('here?3', err)
				let errorMessage = environment.config.customNotifications.generalMessages.error;
				await self.notificationService.warningSwal(
					self.errorTitle, errorMessage, self.errorIcon
				);

				return false
			})


        }catch(e) {
            console.log(e,'error')
            let obj = {
                title: self.errorTitle,
                message: 'Am intampinat o eroare in procesarea formularului dvs. Va rugam sa reincercati.',
                type: self.errorIcon
            }
            self.openToast(obj)
        }
    }

    openToast(object) {

		const { type, message, title } = object

		this.options.progressBar = true
		this.options.preventDuplicates = true
		this.options.closeButton = true

		// Clone current config so it doesn't change when ngModel updates
		const opt = cloneDeep(this.options);
		const inserted = this.toastr.show(
			message,
			title,
			opt,
			this.options.iconClasses[type]
		);
		if (inserted) {
			this.lastInserted.push(inserted.toastId);
		}
		return inserted;

	}
}