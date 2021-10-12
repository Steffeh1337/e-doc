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

import { Router } from '@angular/router';

import { cloneDeep, random } from 'lodash-es';
import {
    GlobalConfig,
    ToastrService,
    ToastContainerDirective,
    ToastNoAnimation,
} from 'ngx-toastr';
import { ControlsModule } from 'src/app/DemoPages/Forms/Elements/controls/controls.module';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-add-solicitare',
    templateUrl: './add-solicitare.component.html',
    styleUrls: ['./add-solicitare.component.sass']
})
export class AddSolicitareComponent implements OnInit {

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

    form: any = []

    loaded: number = 0

    formData: FormGroup

    subsemnatul: any = {
        source_adresa: '-1',
        source_sediu_social: '-1',
        adresa_domiciliu: {},
        adresa_sediu_social: {}
    }

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

    listAddresses: any = []

    generalError: string = null

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

        // this.formData = new FormGroup({
        // 	source_persoana: new FormControl('1', Validators.compose([
        // 		Validators.required
        // 	])),
        // 	source_adresa_domiciliu: new FormControl('-1', Validators.compose([
        // 		Validators.required,
        // 		Validators.min(0)
        // 	])),
        // 	source_adresa_sediu: new FormControl('-1', Validators.compose([
        // 		Validators.required,
        // 		Validators.min(0)
        // 	])),
        // })

        this.listAddress()

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

            console.log(json)
            console.log(self.user, 'check user please')
            console.log(self.tipPersoana, self.tipPersoanaINT)
            self.choosePerson(self.tipPersoana)
        })
    }

    get source_persoana() {
        return this.formData.get('source_persoana');
    }

    choosePerson(tipPersoana) {
        this.listShow = this.sectiuniLista[tipPersoana]
        this.tipPersoana = tipPersoana
        this.step = 1
    }

    resetForm() {
        this.step = 1
        this.loaded = 0
        this.values = this.valuesClean
    }

    async store() {
        console.log('xxx')
    }

    async showForm(row) {
        console.log(row)
        var self = this
        this.loading = true
        try {


            if (row.id == 1) {
                // CF
                self.router.navigateByUrl('dgitl-cf-generate', { replaceUrl: true })
                return false

            } else {
                // not CF
                this.sectionChosen = row
                this.sectionId = row.id
                this.step = 2

                console.log(self.tipPersoana)
                console.log(row.id)

                // make request
                this.dgitlService.initializeForm(self.tipPersoana, row.id)
                    .then(async (res) => {
                        let response = (typeof res.status_code !== 'undefined' ? res : res.error)
                        if (typeof response.status_code !== 'undefined') {
                            if (response.status_code == 200 && typeof response.data !== 'undefined') {
                                console.log(response.data)
                                self.form = response.data
                                self.loading = false

                                let obj = {
                                    title: self.successTitle,
                                    message: 'Formular incarcat cu success',
                                    type: self.successIcon
                                }
                                self.openToast(obj)
                                this.loaded = 1
                                this.step = 2
                                return false;

                            } else {
                                let errorMessage = environment.config.customNotifications.generalMessages.error;
                                response.errors.message.forEach(function (msg) {
                                    errorMessage = msg;
                                })
                                self.loading = false
                                await self.notificationService.warningSwal(
                                    self.errorTitle, errorMessage, self.errorIcon
                                );

                                return false;
                            }

                        } else {
                            // add sentry
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
                        let errorMessage = environment.config.customNotifications.generalMessages.error;
                        await self.notificationService.warningSwal(
                            self.errorTitle, errorMessage, self.errorIcon
                        );

                        return false
                    })
            }
        } catch (err) {
            self.loading = false
            console.log(err)
            await self.notificationService.warningSwal(this.errorTitle,
                'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.', this.errorIcon)
        }
    }


    sectiuniLista: any = {
        persoanaFizica: [
            {
                id: 1,
                title: 'CLADIRI/TERENURI',
                items: [
                    {
                        id: 1,
                        title: 'Cerere certificat de atestare fiscală',
                        title_section: 'CERERE<br/> PENTRU ELIBERAREA UNUI CERTIFICAT DE ATESTARE FISCALĂ PENTRU PERSOANE FIZICE <br/>PRIVIND IMPOZITE, TAXE LOCALE ŞI ALTE VENITURI DATORATE BUGETULUI LOCAL',
                        subtitle: '- Clădiri și terenuri -'
                    },
                    {
                        id: 2,
                        title: 'Declaratie fiscală de clădire',
                        title_section: 'DECLARAȚIE FISCALĂ PENTRU STABILIREA IMPOZITULUI / TAXEI PE CLĂDIRI <br/>PERSOANE FIZICE',
                        subtitle: ''
                    },
                    {
                        id: 3,
                        title: 'DECLARAȚIE FISCALĂ DE TEREN',
                        title_section: "DECLARAȚIE FISCALĂ PENTRU STABILIREA IMPOZITULUI / TAXEI PE TEREN <br/>PERSOANE FIZICE",
                        subtitle: ''
                    },
                    {
                        id: 8,
                        title: 'CERERE SCUTIRE PRIN EFECTUL LEGII F01',
                        title_section: "CERERE SCUTIRE DE LA PLATA IMPOZITELOR / TAXELOR <br/>PERSOANE FIZICE",
                        subtitle: '- PRIN EFECTUL LEGII –'
                    },
                    {
                        id: 9,
                        title: 'CERERE SCUTIRE HOTĂRÂRE CONSILIU LOCAL',
                        title_section: "CERERE SCUTIRE DE LA PLATA IMPOZITELOR / TAXELOR <br/>PERSOANE FIZICE",
                        subtitle: '- PRIN HOTĂRÂRE DE CONSILIU LOCAL –'
                    },
                    {
                        id: 10,
                        title: 'CERERE ISTORIC ROL',
                        title_section: "CERERE PENTRU ELIBERAREA UNUI ISTORIC DE ROL FISCAL <br/>PERSOANE FIZICE",
                        subtitle: ''
                    },
                    {
                        id: 11,
                        title: 'CERERE ADEVERINTA LOCATIVA',
                        title_section: 'CERERE ELIBERARE ADEVERINȚĂ PROPRIETATE <br/>PERSOANE FIZICE',
                        subtitle: ""
                    },
                    {
                        id: 15,
                        title: 'RECTIFICARE DATE IN EVIDENTELE FISCALE',
                        title_section: "CERERE DE RECTIFICARE DATE ÎN EVIDENȚELE FISCALE <br/> PERSOANE FIZICE",
                        subtitle: ''
                    }
                ]
            },
            {
                id: 2,
                title: 'AUTO',
                items: [
                    {
                        id: 4,
                        title: 'DECLARAȚIE FISCALĂ MIJLOACE DE TRANSPORT SUB 12 TONE',
                        title_section: "DECLARAȚIE FISCALĂ PENTRU STABILIREA IMPOZITULUI PENTRU MIJLOACELE DE TRANSPORT AFLATE IN PROPRIETATEA <br/>PERSOANELOR FIZICE",
                        subtitle: ''
                    },
                    {
                        id: 5,
                        title: 'DECLARAȚIE FISCALĂ MIJLOACE DE TRANSPORT PESTE 12 TONE',
                        title_section: "DECLARAȚIE FISCALĂ PENTRU STABILIREA IMPOZITULUI PENTRU MIJLOACELE DE TRANSPORT MARFĂ CU MASA TOTAL AUTORIZATĂ PESTE 12 TONE AFLATE IN PROPRIETATEA PERSOANELOR FIZICE",
                        subtitle: ''
                    },
                    {
                        id: 6,
                        title: 'DECLARAȚIE FISCALĂ SCOATERE DIN EVIDENȚĂ MIJLOACE DE TRANSPORT',
                        title_section: "DECLARAȚIE FISCALĂ PENTRU SCOATEREA DIN EVIDENȚĂ A UNUI MIJLOC DE TRANSPORT <br/>PERSOANE FIZICE",
                        subtitle: ''
                    },
                    {
                        id: 18,
                        title: 'DECLARAȚIA FISCALĂ PENTRU STABILIREA IMPOZITULUI/TAXEI PE MIJLOACELE DE TRANSPORT–MOPEDE',
                        title_section: "DECLARAȚIA FISCALĂ PENTRU STABILIREA IMPOZITULUI/TAXEI PE MIJLOACELE DE TRANSPORT  <br/>AFLATE ÎN PROPRIETATEA PERSOANELOR FIZICE–MOPEDE",
                        subtitle: ''
                    },
                    {
                        id: 21,
                        title: 'DECLARAȚIA PENTRU SCOATEREA DIN EVIDENȚĂ A MIJLOACELOR DE TRANSPORT–MOPEDE ',
                        title_section: "DECLARAȚIA PENTRU SCOATEREA DIN EVIDENȚĂ A MIJLOACELOR DE TRANSPORT <br/> AFLATE ÎN PROPRIETATEA PERSOANELOR JURIDICE –MOPEDE",
                        subtitle: ''
                    },
                    {
                        id: 27,
                        title: 'DECLARAȚIE FISCALĂ MIJLOACE DE TRANSPORT PE APĂ ',
                        title_section: "DECLARAȚIE FISCALĂ MIJLOACE DE TRANSPORT PE APĂ<br/> PERSOANE FIZICE",
                        subtitle: ''
                    },
                    {
                        id: 28,
                        title: 'DECLARAȚIE FISCALĂ SCOATERE DIN EVIDENȚĂ A UNUI MIJLOC DE TRANSPORT PE APĂ ',
                        title_section: "DECLARAȚIE FISCALĂ SCOATERE DIN EVIDENȚĂ A UNUI MIJLOC DE TRANSPORT PE APĂ<br/> PERSOANE FIZICE",
                        subtitle: ''
                    },
                    {
                        id: 32,
                        title: 'CERERE DE CERTIFICAT DE ATESTARE FISCALĂ  (AUTO)',
                        title_section: "CERERE DE CERTIFICAT DE ATESTARE FISCALĂ  (AUTO)<br/> PERSOANE FIZICE",
                        subtitle: ''
                    }
                ]
            },
            {
                id: 3,
                title: 'AMENZI',
                items: [
                    {
                        id: 19,
                        title: 'SOLICITARE SCADERE DEBIT DIN AMENZI',
                        title_section: "SOLICITARE SCADERE DEBIT DIN AMENZI <br/> PERSOANE FIZICE",
                        subtitle: ''
                    },
                    {
                        id: 20,
                        title: 'CERERE RESTITUIRE AMENZI',
                        title_section: "CERERE RESTITUIRE AMENZI<br/> PERSOANE FIZICE",
                        subtitle: ''
                    },
                ]
            },
            {
                id: 4,
                title: 'TAXE',
                items: [
                    // {
                    //     id: 7,
                    //     title: 'DECLARAȚIE TAXĂ DE SALUBRIZARE',
                    //     title_section: "DECLARAȚIE <br/>PRIVIND STABILIREA TAXEI DE SALUBRIZARE<br/>PERSOANE FIZICE",
                    //     subtitle: ''
                    // },
                    {
                        id: 22,
                        title: 'DECLARAȚIA FISCALĂ PENTRU STABILIREA TAXEI PENTRU AFIȘAJ ÎN SCOP DE RECLAMĂ ŞI PUBLICITATE ',
                        title_section: "DECLARAȚIA FISCALĂ PENTRU STABILIREA TAXEI PENTRU AFIȘAJ ÎN SCOP DE RECLAMĂ ŞI PUBLICITATE<br/> PERSOANE FIZICE",
                        subtitle: ''
                    },
                    {
                        id: 23,
                        title: 'CERERE RESTITUIRE TAXĂ DE TIMBRU JUDICIAR  ',
                        title_section: "CERERE RESTITUIRE TAXĂ DE TIMBRU JUDICIAR <br/> PERSOANE FIZICE",
                        subtitle: ''
                    },
                    {
                        id: 34,
                        title: 'DECLARAȚIE FISCALĂ PENTRU STABILIREA TAXEI DE OCUPARE A DOMENIULUI PUBLIC',
                        title_section: "DECLARAȚIE FISCALĂ PENTRU STABILIREA TAXEI DE OCUPARE A DOMENIULUI PUBLIC<br/> PERSOANE FIZICE",
                        subtitle: ''
                    }
                ]
            },
            {
                id: 4,
                title: 'ALTELE',
                items: [
                    {
                        id: 13,
                        title: 'CERERE RESTITUIRE',
                        title_section: "CERERE DE  RESTITUIRE A IMPOZITULUI / TAXEI ACHITATE ÎN PLUS <br/> PERSOANE FIZICE",
                        subtitle: ''
                    },
                    {
                        id: 14,
                        title: 'CERERE COMPENSARE',
                        title_section: "CERERE DE COMPENSARE A IMPOZITULUI / TAXEI ACHITATE ÎN PLUS <br/>PERSOANE FIZICE",
                        subtitle: ''
                    },

                    {
                        id: 24,
                        title: 'NOTIFICARE PROCEDURĂ DE MEDIERE ',
                        title_section: "NOTIFICARE PROCEDURĂ DE MEDIERE<br/> PERSOANE FIZICE",
                        subtitle: ''
                    },
                    {
                        id: 25,
                        title: 'CERERE AUDIENȚĂ ',
                        title_section: "CERERE AUDIENȚĂ<br/> PERSOANE FIZICE",
                        subtitle: ''
                    },
                    {
                        id: 26,
                        title: 'INFORMATII DE INTERES PUBLIC – LEGEA 544',
                        title_section: "INFORMATII DE INTERES PUBLIC – LEGEA 544<br/> PERSOANE FIZICE",
                        subtitle: ''
                    },

                    {
                        id: 29,
                        title: 'ADRESĂ CONTESTAȚIE  ',
                        title_section: "ADRESĂ CONTESTAȚIE  <br/> PERSOANE FIZICE",
                        subtitle: ''
                    },
                ]
            }

        ],
        persoanaJuridica: [
            {
                id: 1,
                title: 'CLADIRI/TERENURI',
                items: [
                    {
                        id: 1,
                        title: 'Cerere certificat de atestare fiscală',
                        title_section: "CERERE <br/> PENTRU ELIBERAREA UNUI CERTIFICAT DE ATESTARE FISCALĂ PENTRU  PERSOANE  JURIDICE<br/>PRIVIND IMPOZITE, TAXE LOCALE ŞI ALTE VENITURI DATORATE BUGETULUI LOCAL",
                        subtitle: '- CLĂDIRI ȘI TERENURI -'
                    },
                    {
                        id: 2,
                        title: 'Declaratie fiscală de clădire',
                        title_section: "DECLARAȚIE FISCALĂ PENTRU STABILIREA<br/>IMPOZITULUI / TAXEI PE CLĂDIRI<br/>PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 3,
                        title: 'DECLARAȚIE FISCALĂ DE TEREN',
                        title_section: "DECLARAȚIE FISCALĂ PENTRU STABILIREA<br/>IMPOZITULUI / TAXEI PE TEREN<br/>PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 30,
                        title: 'MODIFICARE/INCETARE CLADIRE/TEREN ',
                        title_section: "MODIFICARE/INCETARE CLADIRE/TEREN <br/> PERSOANE JURIDICE",
                        subtitle: ''
                    }
                ]
            },
            {
                id: 2,
                title: 'AUTO',
                items: [
                    {
                        id: 4,
                        title: 'DECLARAȚIE FISCALĂ MIJLOACE DE TRANSPORT SUB 12 TONE',
                        title_section: "DECLARAȚIE FISCALĂ PENTRU STABILIREA IMPOZITULUI PENTRU MIJLOACELE DE TRANSPORT AFLATE IN PROPRIETATEA<br/>PERSOANELOR JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 5,
                        title: 'DECLARAȚIE FISCALĂ MIJLOACE DE TRANSPORT PESTE 12 TONE',
                        title_section: "DECLARAȚIE FISCALĂ PENTRU STABILIREA IMPOZITULUI PENTRU MIJLOACELE DE TRANSPORT MARFĂ CU MASA TOTAL AUTORIZATĂ PESTE 12 TONE <br/>AFLATE IN PROPRIETATEA PERSOANELOR JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 6,
                        title: 'DECLARAȚIE FISCALĂ SCOATERE DIN EVIDENȚĂ MIJLOACE DE TRANSPORT',
                        title_section: "DECLARAȚIE FISCALĂ PENTRU SCOATEREA DIN EVIDENȚĂ <br/>A UNUI MIJLOC DE TRANSPORT<br/>PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 18,
                        title: 'DECLARAȚIA FISCALĂ PENTRU STABILIREA IMPOZITULUI/TAXEI PE MIJLOACELE DE TRANSPORT–MOPEDE',
                        title_section: "DECLARAȚIA FISCALĂ PENTRU STABILIREA IMPOZITULUI/TAXEI PE MIJLOACELE DE TRANSPORT  <br/>AFLATE ÎN PROPRIETATEA PERSOANELOR JURIDICE–MOPEDE",
                        subtitle: ''
                    },
                    {
                        id: 21,
                        title: 'DECLARAȚIA PENTRU SCOATEREA DIN EVIDENȚĂ A MIJLOACELOR DE TRANSPORT–MOPEDE ',
                        title_section: "DECLARAȚIA PENTRU SCOATEREA DIN EVIDENȚĂ A MIJLOACELOR DE TRANSPORT <br/> AFLATE ÎN PROPRIETATEA PERSOANELOR JURIDICE –MOPEDE",
                        subtitle: ''
                    },
                    {
                        id: 27,
                        title: 'DECLARAȚIE FISCALĂ MIJLOACE DE TRANSPORT PE APĂ ',
                        title_section: "DECLARAȚIE FISCALĂ MIJLOACE DE TRANSPORT PE APĂ<br/> PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 28,
                        title: 'DECLARAȚIE FISCALĂ SCOATERE DIN EVIDENȚĂ A UNUI MIJLOC DE TRANSPORT PE APĂ ',
                        title_section: "DECLARAȚIE FISCALĂ SCOATERE DIN EVIDENȚĂ A UNUI MIJLOC DE TRANSPORT PE APĂ<br/> PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 32,
                        title: 'CERERE DE CERTIFICAT DE ATESTARE FISCALĂ  (AUTO)',
                        title_section: "CERERE DE CERTIFICAT DE ATESTARE FISCALĂ  (AUTO)<br/> PERSOANE JURIDICE",
                        subtitle: ''
                    }
                ]
            },
            {
                id: 3,
                title: 'AMENZI',
                items: [
                    {
                        id: 19,
                        title: 'SOLICITARE SCADERE DEBIT DIN AMENZI',
                        title_section: "SOLICITARE SCADERE DEBIT DIN AMENZI <br/> PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 20,
                        title: 'CERERE RESTITUIRE AMENZI',
                        title_section: "SOLICITARE SCADERE DEBIT DIN AMENZI <br/> PERSOANE JURIDICE",
                        subtitle: ''
                    },
                ]
            },
            {
                id: 4,
                title: 'TAXE',
                items: [
                    // {
                    //     id: 7,
                    //     title: 'DECLARAȚIE TAXĂ DE SALUBRIZARE',
                    //     title_section: "DECLARAȚIE<br/>PRIVIND STABILIREA TAXEI DE SALUBRIZARE<br/>PERSOANE JURIDICE",
                    //     subtitle: ''
                    // },
                    {
                        id: 16,
                        title: 'IMPOZIT PE SPECTACOLE',
                        title_section: "DECLARAȚIE-DECONT PRIVIND IMPOZITUL PE SPECTACOLE <br/> PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 33,
                        title: 'CERERE PENTRU ÎNREGISTRARE/VIZARE A ABONAMENTELOR ŞI A BILETELOR DE INTRARE LA SPECTACOLE',
                        title_section: "CERERE PENTRU ÎNREGISTRARE/VIZARE A ABONAMENTELOR ŞI A BILETELOR DE INTRARE LA SPECTACOLE<br/> PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 17,
                        title: 'DECLARAȚIE PRIVIND TAXA SPECIALĂ PENTRU PROMOVARE TURISTICĂ',
                        title_section: "DECLARAŢIE – DECONT <br/> PRIVIND SUMELE ÎNCASATE REPREZENTÂND  <br/>TAXA SPECIALĂ PENTRU PROMOVARE TURISTICĂ <br/>A MUNICIPIULUI BUCUREȘTI",
                        subtitle: ''
                    },
                    {
                        id: 22,
                        title: 'DECLARAȚIA FISCALĂ PENTRU STABILIREA TAXEI PENTRU AFIȘAJ ÎN SCOP DE RECLAMĂ ŞI PUBLICITATE ',
                        title_section: "DECLARAȚIA FISCALĂ PENTRU STABILIREA TAXEI PENTRU AFIȘAJ ÎN SCOP DE RECLAMĂ ŞI PUBLICITATE<br/> PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 31,
                        title: 'DECLARAȚIA FISCALĂ PENTRU STABILIREA TAXEI PENTRU SERVICII DE RECLAMĂ ŞI PUBLICITATE',
                        title_section: "DECLARAȚIA FISCALĂ PENTRU STABILIREA TAXEI PENTRU SERVICII DE RECLAMĂ ŞI PUBLICITATE<br/> PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 23,
                        title: 'CERERE RESTITUIRE TAXĂ DE TIMBRU JUDICIAR  ',
                        title_section: "CERERE RESTITUIRE TAXĂ DE TIMBRU JUDICIAR <br/> PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 34,
                        title: 'DECLARAȚIE FISCALĂ PENTRU STABILIREA TAXEI DE OCUPARE A DOMENIULUI PUBLIC',
                        title_section: "DECLARAȚIE FISCALĂ PENTRU STABILIREA TAXEI DE OCUPARE A DOMENIULUI PUBLIC<br/> PERSOANE JURIDICE",
                        subtitle: ''
                    }
                ]
            },
            {
                id: 4,
                title: 'ALTELE',
                items: [
                    {
                        id: 13,
                        title: 'CERERE RESTITUIRE',
                        title_section: "CERERE DE  RESTITUIRE A IMPOZITULUI / TAXEI ACHITATE ÎN PLUS<br/>PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 14,
                        title: 'CERERE COMPENSARE',
                        title_section: "CERERE DE COMPENSARE A IMPOZITULUI / TAXEI ACHITATE ÎN PLUS <br/>PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 24,
                        title: 'NOTIFICARE PROCEDURĂ DE MEDIERE ',
                        title_section: "NOTIFICARE PROCEDURĂ DE MEDIERE<br/> PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 25,
                        title: 'CERERE AUDIENȚĂ ',
                        title_section: "CERERE AUDIENȚĂ<br/> PERSOANE JURIDICE",
                        subtitle: ''
                    },
                    {
                        id: 26,
                        title: 'INFORMATII DE INTERES PUBLIC – LEGEA 544',
                        title_section: "INFORMATII DE INTERES PUBLIC – LEGEA 544<br/> PERSOANE JURIDICE",
                        subtitle: ''
                    },

                    {
                        id: 29,
                        title: 'ADRESĂ CONTESTAȚIE  ',
                        title_section: "ADRESĂ CONTESTAȚIE  <br/> PERSOANE JURIDICE",
                        subtitle: ''
                    },
                ]
            }

        ]
    }

    possibleFileKeys: any = ['ci', 'certificat_deces', 'procura', 'documente_fotografii', 'copie_ci_mandatar', 'delegatie', 'cui', 'contract_inchiriere', 'copie_ci_coproprietar', 'act_dobandire', 'cadastru', 'Imputernicit', 'plan_de_amplasament', 'copie_ci_imputernicit', 'plan_de_amplasament', 'act_dobandire_stampila', 'carte_identitate_auto', 'fisa_inmatriculare_auto', 'contract_vanzare_cumparare', 'documente_justificative', 'declaratie_propria_raspundere', 'dovada_proprietar_mostenitor', 'balanta_analitica', 'proces_verbal_anulare_serii', 'carnetele_nevandute', 'raport_bilete_vandute', 'acte_contabile', 'contract_inchiriere_comodat', 'schita', 'raport_evaluare', 'certificat_fiscal', 'acte_justificative_divort', 'semnatura_olografa', 'proces_verbal_anulare_amenda', 'chitanta_plata_amenda', 'tip_amenda', 'itp_valabil', 'proces_verbal_afisaj', 'certificat_ambarcatiune_agrement', 'raport_expertiza', 'proces_verbal_receptie', 'autorizatie_de_construire', 'contract_prestari_servicii', 'factura_servicii']

    showListFiles: any = {
        ci: false,
        certificat_deces: false,
        procura: false,
        documente_fotografii: false,
    }

    bindElementInput(input) {
        return input
    }

    updateAdresaSelected($ev, key) {
        var self = this
        console.log($ev, key, 'check here')
    }

    modelChangeFn($ev, element) {
        var self = this
        console.log(this.values, $ev, element)

        switch (element.directive) {
            case 'select-element':

                self.values[element.section][element.key] = $ev
                break;

            default:
                let arr = element.ngModel.split('.')
                if (arr[0] == 'values')
                    arr.shift()

                self.updateObject(self.values, $ev, arr.join('.'))
                break;
        }
        console.log(this.values)
    }

    updateObject(object, newValue, path) {

        var stack = path.split('.');

        while (stack.length > 1) {
            object = object[stack.shift()];
        }

        object[stack.shift()] = newValue;
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

    async submit() {
        console.log(this.values, 'CHECK FORM INFO/DATA')

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

        // check files please??
        const data = Object.assign(this.values, { subsemnatul: this.subsemnatul }, { idForm: this.sectionId })
        console.log(data, 'is it?')

        this.dgitlService.storeForm(data)
            .then(async (res) => {
                let response = (typeof res.status_code !== 'undefined' ? res : res.error)
                console.log(response)
                if (typeof response.status_code !== 'undefined') {
                    if (response.status_code == 200 && typeof response.data !== 'undefined') {

                        self.loading = false
                        self.resetForm()
                        await self.notificationService.warningSwal(
                            self.successTitle, 'Solicitarea dvs a fost trimisa cu succes. Numarul solicitarii este #' + response.data.id, self.successIcon
                        );
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
    }

    clickFileInput(inputKey) {
        let element: HTMLElement = document.getElementById(inputKey) as HTMLElement;
        element.click();
    }

    clearInputFile(key) {
        this.values.files[key] = []
        var element = <HTMLInputElement>document.getElementById('file_' + key);
        element.value = '';
    }

    upload(files, key) {
        var self = this
        const file = files[0];
        const formData = new FormData();
        formData.append('file', file, file.name);

        this.uploading[key] = true;
        self.values.files[key] = []

        return this.authService.fileUpload(formData)
            .then((result) => {

                self.values.files[key].push(result.data)
                self.uploading[key] = false;

                let obj = {
                    title: self.successTitle,
                    message: 'Fisierul dvs a fost adaugat cu succes.',
                    type: self.successIcon
                }
                self.openToast(obj)

            })
            .catch((err) => {
                self.uploading[key] = false;
                console.log(err, 'err')
                // show error.. on toast

                let obj = {
                    title: self.errorTitle,
                    message: 'Ne pare rau, dar fisierul dumneavoastra nu a putut fi incarcat. Va rugam sa reincercati!',
                    type: self.errorIcon
                }
                self.openToast(obj)
            });
    }

    values: any = {
        declar_propria_rasp: false,
        declar_acte: false,
        terms: false,
        notar: {
            denumire: '',
            cui: '',
            email: '',
            telefon: '',
            judet: null,
            oras: '',
            sector: null,
            strada: '',
            numar: '',
            bloc: '',
            scara: '',
            etaj: '',
            apartament: '',
            observatii: ''
        },
        banca: {
            iban: '',
            banca: '',
            sucursala: '',
            observatii: ''
        },
        mc_gunoi: {
            ian: '',
            feb: '',
            mar: '',
            apr: '',
            mai: '',
            iun: '',
            iul: '',
            aug: '',
            sep: '',
            oct: '',
            nov: '',
            dec: ''
        },
        date_identificare_proprietar_nou: {
            nume: '',
            prenume: '',
            cnp: '',
            judet: null,
            oras: '',
            sector: null,
            strada: '',
            numar: '',
            bloc: '',
            scara: '',
            etaj: '',
            apartament: '',
            observatii: ''
        },
        adresa_domiciliu: {
            judet: null,
            oras: '',
            sector: null,
            strada: '',
            numar: '',
            bloc: '',
            scara: '',
            etaj: '',
            apartament: ''
        },
        adresa_sediu: {
            judet: null,
            oras: '',
            sector: null,
            strada: '',
            numar: '',
            bloc: '',
            scara: '',
            etaj: '',
            apartament: ''
        },
        adresa_proprietate: {
            strada: '',
            numar: '',
            bloc: '',
            scara: '',
            etaj: '',
            apartament: '',
            observatii: ''
        },
        adresa_scutire: {
            strada: '',
            numar: '',
            bloc: '',
            scara: '',
            etaj: '',
            apartament: ''
        },
        identificare: {
            nume: '',
            prenume: '',
            observatii: '',
            email: '',
            telefon: '',
            cnp: '',
            ci_serie: null,
            ci_numar: null,
            denumire: null,
            cui: null,
        },
        beneficiar: {
            pf_nume: '',
            pf_prenume: '',
            pf_observatii: '',
            pf_email: '',
            pf_telefon: '',
            pf_cnp: '',
            pf_ci_serie: null,
            pf_ci_numar: null,
            pf_judet: null,
            pf_oras: '',
            pf_sector: null,
            pf_strada: '',
            pf_numar: '',
            pf_bloc: '',
            pf_scara: '',
            pf_etaj: '',
            pf_apartament: '',
            pj_sediu_denumire: null,
            pj_sediu_cui: null,
            pj_sediu_email: '',
            pj_sediu_telefon: '',
            pj_sediu_judet: null,
            pj_sediu_oras: '',
            pj_sediu_sector: null,
            pj_sediu_strada: '',
            pj_sediu_numar: '',
            pj_sediu_bloc: '',
            pj_sediu_scara: '',
            pj_sediu_etaj: '',
            pj_sediu_apartament: '',
            pj_reprezentant_nume: '',
            pj_reprezentant_prenume: '',
            pj_reprezentant_observatii: '',
            pj_reprezentant_email: '',
            pj_reprezentant_telefon: '',
            pj_reprezentant_cnp: '',
            pj_reprezentant_ci_serie: null,
            pj_reprezentant_ci_numar: null,
            pj_reprezentant_judet: null,
            pj_reprezentant_oras: '',
            pj_reprezentant_sector: null,
            pj_reprezentant_strada: '',
            pj_reprezentant_numar: '',
            pj_reprezentant_bloc: '',
            pj_reprezentant_scara: '',
            pj_reprezentant_etaj: '',
            pj_reprezentant_apartament: ''
        },
        informatii: {
            calitateSolicitant: null,
            tipSolicitant: null,
            tipListaBilete: null,
            necesitate: null,
            observatii_necesitate: null,
            imputerniciti: [],
            coproprietari: [],
            tip_taxa: [{
                id: 0,
                data_inceput: new Date(),
                data_sfarsit: new Date(),
                observatii: '',
                suprafata: null,
                tip_taxa: null
            }],
            contracte_publicitate: [{
                id: 0,
                data_inceput: new Date(),
                observatii: '',
                contract: null,
                valoare: null,
                luna_declaratiei: null,
                beneficiar: null
            }],
            numar_act_dobandire: '',
            data_act_dobandire: '',
            tip_teren: null,
            suprafata_teren: '',
            cota_proprietate: '',
            numar_cadastral: '',
            categorie_teren: null,
            tip_cladire: null,
            tip_pereti: null,
            suprafata: null,
            suprafata_mp: '',
            cu_instalatii: null,
            valoarea_cladirii: null,
            valoare: '',
            data_conform_dobandire: null,
            tip_mijloc_transport: null,
            hybrid: null,
            electric: null,
            data_dobandire: null,
            serie_sasiu: '',
            serie_motor: '',
            serie_mtr: null,
            capacitate_cilindrica: '',
            anul_fabricatiei: '',
            tip_mijloc_transport_tonaj: null,
            tip_suspensie: null,
            marca: null,
            masa_autorizata: '',
            act_instrainare: null,
            data_incetare: null,
            numar_persoane: '',
            data_inceput: null,
            data_sfarsit: null,
            categorie_scutire: null,
            tip_scutire: null,
            motiv_solicitare: '',
            suma_solicitata: '',
            tip_impozit_solicitare: null,
            metoda_restituirii: null,
            date_identificare: '',
            an_constructie: '',
            valoarea_achizitiei: '',
            data_documentului_pj: null,
            denumire_spectacol: '',
            vanzari_incasarea_biletelor: '',
            vanzari_contravaloarea_timbrelor: '',
            sume_cedate_scopuri_umanitare: '',
            incasari_impozitabile: '',
            cota_impozit: '',
            an_fabricatie: '',
            destinatie_cladire: null,
            tip_document: null,
            valoare_achizitie: '',
            locuit: null,
            activitati_economice: null,
            stare_civila: null,
            tip_amplasament: null,
            tip_rectificare: null,
            tip_moped: null,
            tip_transport_apa: null,
            bilete_abonamente: [],
            luna_declaratiei: null
        },
        files: {
            ci: [],
            certificat_deces: [],
            procura: [],
            documente_fotografii: [],
            copie_ci_mandatar: [],
            delegatie: [],
            cui: [],
            contract_inchiriere: [],
            copie_ci_coproprietar: [],
            act_dobandire: [],
            cadastru: [],
            Imputernicit: [],
            plan_de_amplasament: [],
            copie_ci_imputernicit: [],
            act_dobandire_stampila: [],
            carte_identitate_auto: [],
            fisa_inmatriculare_auto: [],
            contract_vanzare_cumparare: [],
            documente_justificative: [],
            declaratie_propria_raspundere: [],
            dovada_proprietar_mostenitor: [],
            balanta_analitica: [],
            proces_verbal_anulare_serii: [],
            carnetele_nevandute: [],
            raport_bilete_vandute: [],
            acte_contabile: [],
            contract_inchiriere_comodat: [],
            schita: [],
            raport_evaluare: [],
            certificat_fiscal: [],
            acte_justificative_divort: [],
            semnatura_olografa: [],
            proces_verbal_anulare_amenda: [],
            chitanta_plata_amenda: [],
            tip_amenda: [],
            itp_valabil: [],
            proces_verbal_afisaj: [],
            certificat_ambarcatiune_agrement: [],
            raport_expertiza: [],
            proces_verbal_receptie: [],
            autorizatie_de_construire: [],
            contract_prestari_servicii: [],
            factura_servicii: []
        }
    }

    uploading: any = {
        ci: false,
        certificat_deces: false,
        procura: false,
        documente_fotografii: false,
        copie_ci_mandatar: false,
        delegatie: false,
        cui: false,
        contract_inchiriere: false,
        copie_ci_coproprietar: false,
        act_dobandire: false,
        cadastru: false,
        Imputernicit: false,
        plan_de_amplasament: false,
        copie_ci_imputernicit: false,
        act_dobandire_stampila: false,
        carte_identitate_auto: false,
        fisa_inmatriculare_auto: false,
        contract_vanzare_cumparare: false,
        documente_justificative: false,
        declaratie_propria_raspundere: false,
        dovada_proprietar_mostenitor: false,
        balanta_analitica: false,
        proces_verbal_anulare_serii: false,
        carnetele_nevandute: false,
        raport_bilete_vandute: false,
        acte_contabile: false,
        contract_inchiriere_comodat: false,
        schita: false,
        raport_evaluare: false,
        certificat_fiscal: false,
        acte_justificative_divort: false,
        semnatura_olografa: false,
        proces_verbal_anulare_amenda: false,
        chitanta_plata_amenda: false,
        tip_amenda: false,
        itp_valabil: false,
        proces_verbal_afisaj: false,
        certificat_ambarcatiune_agrement: false,
        raport_expertiza: false,
        proces_verbal_receptie: false,
        autorizatie_de_construire: false,
        contract_prestari_servicii: false,
        factura_servicii: false
    }

    valuesClean: any = this.values

    judete: any = [
        {
            id: 1,
            "name": "Alba"
        },
        {
            id: 2,
            "name": "Arad"
        },
        {
            id: 3,
            "name": "Arges"
        },
        {
            id: 4,
            "name": "Bacau"
        },
        {
            id: 5,
            "name": "Bihor"
        },
        {
            id: 6,
            "name": "Bistrita-Nasaud"
        },
        {
            id: 7,
            "name": "Botosani"
        },
        {
            id: 8,
            "name": "Braila"
        },
        {
            id: 9,
            "name": "Brasov"
        },
        {
            id: 42,
            "name": "Bucuresti"
        },
        {
            id: 10,
            "name": "Buzau"
        },
        {
            id: 11,
            "name": "Calarasi"
        },
        {
            id: 12,
            "name": "Carasi-Severin"
        },
        {
            id: 13,
            "name": "Cluj"
        },
        {
            id: 14,
            "name": "Constanta"
        },
        {
            id: 15,
            "name": "Covasna"
        },
        {
            id: 16,
            "name": "Dambovita"
        },
        {
            id: 17,
            "name": "Dolj"
        },
        {
            id: 18,
            "name": "Galati"
        },
        {
            id: 19,
            "name": "Giurgiu"
        },
        {
            id: 20,
            "name": "Gorj"
        },
        {
            id: 21,
            "name": "Harghita"
        },
        {
            id: 22,
            "name": "Hunedoara"
        },
        {
            id: 23,
            "name": "Ialomita"
        },
        {
            id: 24,
            "name": "Iasi"
        },
        {
            id: 25,
            "name": "Ilfov"
        },
        {
            id: 26,
            "name": "Maramures"
        },
        {
            id: 27,
            "name": "Mehedinti"
        },
        {
            id: 28,
            "name": "Mures"
        },
        {
            id: 29,
            "name": "Neamt"
        },
        {
            id: 30,
            "name": "Olt"
        },
        {
            id: 31,
            "name": "Prahova"
        },
        {
            id: 32,
            "name": "Salaj"
        },
        {
            id: 33,
            "name": "Satu Mare"
        },
        {
            id: 34,
            "name": "Sibiu"
        },
        {
            id: 35,
            "name": "Suceava"
        },
        {
            id: 36,
            "name": "Teleorman"
        },
        {
            id: 37,
            "name": "Timis"
        },
        {
            id: 38,
            "name": "Tulcea"
        },
        {
            id: 39,
            "name": "Valcea"
        },
        {
            id: 40,
            "name": "Vaslui"
        },
        {
            id: 41,
            "name": "Vrancea"
        },
        {
            id: 99,
            "name": "Altele"
        }
    ]

    taxeRecords: any = [
        {
            id: 1,
            name: 'Taxa pentru utilizarea locurilor publice pentru desfasurarea unor activitati de comercializare cu caracter sezonier ocazional'
        },
        {
            id: 2,
            name: 'Taxa pentru utilizarea locurilor publice pentru activitatea de comercializare a produselor alimentare si nealimentare'
        },
        {
            id: 3,
            name: 'Taxa pentru utilizarea locurilor publice cu unitati de alimentatie publica si terase de vara'
        },
        {
            id: 4,
            name: 'Taxa pentru utilizarea locurilor publice pentru prestari servicii'
        },
        {
            id: 5,
            name: 'Taxa pentru utilizarea locurilor publice pentru locuri de noroc si schimb valutar'
        },
        {
            id: 6,
            name: 'Taxa pentru utilizarea locurilor publice pentru depozite si anexe la constructii'
        },
        {
            id: 7,
            name: 'Taxa pentru utilizarea locurilor publice pentru activitati de comercializare exclusiva de presa si carte'
        },
        {
            id: 8,
            name: 'Taxa pentru utilizarea locurilor publice pentru organizare de santier'
        },
        {
            id: 9,
            name: 'Taxa pentru utilizarea locurilor publice pentru garaje'
        },
        {
            id: 10,
            name: 'Taxa pentru utilizarea locurilor publice cu mijloace publicitare'
        },
        {
            id: 11,
            name: 'Taxa pentru utilizarea locurilor publice pentru cale suplimentara de acces'
        }
    ]

    beneficiari: any = [
        {
            id: 1,
            name: 'Persoana fizica'
        },
        {
            id: 2,
            name: 'Persoana juridica'
        }
    ]

    luniCalendaristice: any = [
        {
            id: 1,
            name: 'Ianuarie'

        },
        {
            id: 2,
            name: 'Februarie'

        },
        {
            id: 3,
            name: 'Martie'

        },
        {
            id: 4,
            name: 'Aprilie'

        },
        {
            id: 5,
            name: 'Mai'

        },
        {
            id: 6,
            name: 'Iunie'

        },
        {
            id: 7,
            name: 'Iulie'

        },
        {
            id: 8,
            name: 'August'

        },
        {
            id: 9,
            name: 'Septembrie'

        },
        {
            id: 10,
            name: 'Octombrie'

        },
        {
            id: 11,
            name: 'Noiembrie'

        },
        {
            id: 12,
            name: 'Decembrie'

        }
    ]

    adresaArr: any = {
        id: 0,
        judet: null,
        oras: '',
        sector: null,
        strada: '',
        numar: '',
        bloc: '',
        scara: '',
        etaj: '',
        apartament: ''
    }

    imputernicitArr: any = {
        id: 0,
        nume: '',
        prenume: '',
        observatii: '',
        email: '',
        telefon: '',
        cnp: '',
        ci_serie: null,
        ci_numar: null,
        judet: null,
        oras: '',
        sector: null,
        strada: '',
        numar: '',
        bloc: '',
        scara: '',
        etaj: '',
        apartament: ''
    }

    bileteArr: any = {
        id: 0,
        fel_document_bilete: '',
        numar_document_bilete: '',
        total_bilete: '',
        tarif_bilete: '',
        valoare_totala_bilete: '',
        serie_bilete: '',
        numar_inceput_bilete: '',
        numar_sfarsit_bilete: '',
        necesitate_bilete: '',
        data_inceput: '',
        data_sfarsit: ''
    }

    tip_taxaArr: any = {
        id: 0,
        data_inceput: new Date(),
        data_sfarsit: new Date(),
        observatii: '',
        suprafata: null
    }

    contracte_publicitateArr: any = {
        id: 0,
        data_inceput: new Date(),
        observatii: '',
        contract: null,
        valoare: null,
        luna_declaratiei: null,
        beneficiar: null
    }

    newElem: any = {
        id: 0,
        name: ''
    }

    sectoare: any = [
        {
            id: 1,
            name: '1'
        },
        {
            id: 2,
            name: '2'
        },
        {
            id: 3,
            name: '3'
        },
        {
            id: 4,
            name: '4'
        },
        {
            id: 5,
            name: '5'
        },
        {
            id: 6,
            name: '6'
        }
    ]
    hiddenKeys: any = ['locuit', 'hybrid', 'electric', 'serie_motor', 'capacitate_cilindrica', 'masa_autorizata']

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
