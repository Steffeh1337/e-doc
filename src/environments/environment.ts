// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	app: {
		paymentUrls: {
			successUrl: "http://ps6-web.back.lc/success-bt-payment",
			errorUrl: "http://ps6-web.back.lc/fail-bt-payment"
		}
	},
	config: {
		fromTokenValid: 'http://ps6-web.back.lc/api/auth/login',
		tokenKey: 'ps6-web-app-token',
		userKey: 'ps6-web-app-user',
		storageKey: "ps6-web-app",
		copyrightText: "Primaria Sectorului 6",
		defaultLNG: 'ro',
		emailRegex : "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
		codeSMSRegex : /^[0-9]+$/,
		phoneRegex: '[0-9]{6,20}',
		cnpRegex: '[0-9]{13,13}',
		validatorsAccrossApp: {
			minPassword: 8,
			maxPassword: 30,
			emailMaxLength: 50,
			minStringLength: 2,
			maxStringLength: 60,
			minSmsCodeLength: 1,
			maxSmsCodeLength: 1
		},
		customNotifications: {
			icons: {
				success: "success",
				error: "error",
				info: "info",
				warning: "warning"
			},
			headers: {
				success: "Success",
				error: "Eroare",
				successForm: "Felicitari!"
			},
			generalMessages: {
				error: "Ne pare rau, dar am intampinat o problema. Va rugam sa reincercati. Daca problema persista, va rugam sa ne contactati prin butonul de suport IT."
			},
			mobile: {
				setari: {
					tipuriSesizari: {
						editSuccess: "Tipul de sesizare a fost actualizat cu succes!",
						editError: "Tipul de sesizare nu a putut fi actualizat.",
						addSuccess: "Tipul de sesizare a fost adăugat cu succes!",
						addError: "Tipul de sesizare nu a putut fi adăugat." 
					},
					statusuriSesizari: {
						editSuccess: "Statusul sesizării a fost actualizat cu succes!",
						editError: "Statusul sesizării nu a putut fi actualizat.",
						addSuccess: "Statusul a fost adăugat cu succes!",
						addError: "Statusul nu a putut fi adăugat." 
					},
					prioritatiSesizari: {
						editSuccess: "Prioritatea sesizării a fost actualizată cu succes!",
						editError: "Prioritatea sesizării nu a putut fi actualizată.",
						addSuccess: "Prioritatea a fost adăugată cu succes!",
						addError: "Prioritatea nu a putut fi adăugată."
					},
					sabloaneSesizari: {
						editSuccess: "Șablonul sesizării a fost actualizat cu succes!",
						editError: "Șablonul sesizării nu a putut fi actualizat.",
						addSuccess: "Șablonul a fost adăugat cu succes!",
						addError: "Șablonul nu a putut fi adăugat."
					},
					institutii: {
						editSuccess: "Instituția a fost actualizată cu succes!",
						editError: "Instituția nu a putut fi actualizată.",
						addSuccess: "Instituția a fost adăugată cu succes!",
						addError: "Instituția nu a putut fi adăugată."
					},
					departamenteInstitutii: {
						editSuccess: "Departamentul a fost actualizat cu succes!",
						editError: "Departamentul nu a putut fi actualizat.",
						addSuccess: "Departamentul a fost adăugat cu succes!",
						addError: "Departamentul nu a putut fi adăugat."
					}
				},
				articole: {
					editSuccess: "Articolul a fost actualizat cu succes!",
					editError: "Articolul nu a putut fi actualizat.",
					addSuccess: "Articolul a fost adăugat cu succes!",
					addError: "Articolul nu a putut fi adăugat.",
					changePublicVisibilitySuccess: "Vizibilitatea articolului a fost actualizată cu succes!",
					changePublicVisibilityError: "Vizibilitatea articolului nu a putut fi actualizată."
				},
				paginiMobile: {
					editSuccess: "Pagina a fost actualizată cu succes!",
					editError: "Pagina nu a putut fi actualizată.",
					addSuccess: "Pagina a fost adăugată cu succes!",
					addError: "Pagina nu a putut fi adăugată."
				},
				sectiuniMobile: {
					editSuccess: "Secțiunea a fost actualizată cu succes!",
					editError: "Secțiunea nu a putut fi actualizată.",
					addSuccess: "Secțiunea a fost adăugată cu succes!",
					addError: "Secțiunea nu a putut fi adăugată.",
					FAQ: {
						editSuccess: "FAQ-ul a fost actualizat cu succes!",
						editError: "FAQ-ul nu a putut fi actualizat.",
						addSuccess: "FAQ-ul a fost adăugat cu succes!",
						addError: "FAQ-ul nu a putut fi adăugat.",
						deleteSuccess: "FAQ-ul a fost șters cu succes!",
						deleteError: "FAQ-ul nu a putut fi șters."
					}
				}
			}
		}
	},
	interop: {
		basePath: "http://ps6-web.back.lc",
		user: {
			loginUrl: '/api/auth/login',
			refreshLogin: '/api/refresh-login',
			resendCode: '/api/cetatean-resend-code',
			confirmCode: '/api/cetatean-confirm-code',
			checkEmailPasswordReset : '/api/auth/password/reset-password',
			resendCodePasswordReset : '/api/auth/password/reset-password-resend-code',
			verifyCodePasswordReset: "/api/auth/password/reset-verify-code",
			updatePasswordReset: "/api/auth/password/reset-password-update",
			fileUploadRegister: '/api/upload-file-register',
			fileUploadRegisterBase64: '/api/upload-file-register-base64',
			registerAccount: '/api/cetatean-register',
			findDetails: '/api/cetatean/find-details',
			updatePasswordAccount: '/api/cetatean/password',
			updateInfoAccount: '/api/cetatean/profile-update',
			addressSave: '/api/cetatean/address/save',
			addressList: '/api/cetatean/address/list',
			addressDelete: '/api/cetatean/address/delete/',
			checkPinRegister: "/api/auth/check-pin-register"
		},
		dgitl: {
			initializeForm: '/api/dgitl/getFormInit/',
			storeForm: '/api/dgitl/storeForm',
			listSolicitari: '/api/dgitl/solicitari-list',
			viewSolicitare: '/api/dgitl/solicitare-view/',
			cfGetMatricole: '/api/dgitl/cf-get-matricole',
			saveMessageSolicitare: '/api/dgitl/solicitare-save-message/',
            saveSolicitareCertificatFiscal: '/api/dgitl/process-certificat-fiscal-request'
		},
        api: {
            payments: {
				requestPayment: '/api/mobile-payment-request-v2',
				getTax: '/api/get-taxes-cetatean-v2',
				processPaymentsRecurente: '/api/process-payments-recurente/',
				getCards: '/api/get-cards',
				removeCard: '/api/remove-card/'
            },
			mobile: {
				setari: {
					tipuriSesizari: {
						getTipuriSesizari: '/api/sesizaretypes',
						getDepartamente: '/api/departments-active',
						findTipSesizare: '/api/sesizare/type/',
						editTipSesizare: '/api/sesizare/type',
						addTipSesizare: '/api/sesizare/type',
					},
					statusuriSesizari: {
						getStatusuriSesizari: '/api/sesizarestatuses',
						findStatusSesizare: '/api/sesizare/status/',
						editStatusSesizare: '/api/sesizare/status',
						addStatusSesizare: '/api/sesizare/status'
					},
					prioritatiSesizari: {
						getPrioritatiSesizari: '/api/sesizarepriorities',
						findPrioritateSesizare: '/api/sesizare/priority/',
						editPrioritateSesizare: '/api/sesizare/priority',
						addPrioritateSesizare: '/api/sesizare/priority'
					},
					sabloaneSesizari: {
						getSabloaneSesizari: '/api/sesizaresabloane',
						findSablonSesizare: '/api/sesizare-sabloane/',
						editSablonSesizare: '/api/sesizare-sabloane',
						addSablonSesizare: '/api/sesizare-sabloane'
					},
					institutii: {
						getInstitutii: '/api/directii',
						findInstitutie: '/api/directie/',
						editInstitutie: '/api/directie',
						addInstitutie: '/api/directie'
					},
					departamenteInstitutii: {
						getDepartments: '/api/departments',
						findDepartment: '/api/department/',
						editDepartment: '/api/department',
						addDepartment: '/api/department'
					}
				},
				articole: {
					getArticole: '/api/articles',
					findArticol: '/api/article/',
					editArticol: '/api/article',
					addArticol: '/api/article',
					updatePublicView: '/api/article-public-view/'
				},
				paginiMobile: {
					getPaginiMobile: '/api/mobile-section-pages',
					getSectiuniMobile: '/api/mobile-sections-active',
					findPaginaMobila: '/api/mobile-section-page/',
					editPaginaMobila: '/api/mobile-section-page',
					addPaginaMobila: '/api/mobile-section-page'
				},
				sectiuniMobile: {
					getSectiuniMobile: '/api/mobile-sections',
					findSectiuneMobila: '/api/mobile-section/',
					editSectiuneMobila: '/api/mobile-section',
					addSectiuneMobila: '/api/mobile-section',

					getFAQ: '/api/mobile-section-faq/',
					findFAQ: '/api/mobile-section-faq-one/',
					editSectiuneMobilaFAQ: '/api/mobile-section-faq',
					addSectiuneMobilaFAQ: '/api/mobile-section-faq/',
					deleteFAQ: '/api/mobile-section-faq/'
				}
			}
        }
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
