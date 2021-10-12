// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	app: {
		paymentUrls: {
			successUrl: "http://ps6-mob.back.lc/success-bt-payment",
			errorUrl: "http://ps6-mob.back.lc/fail-bt-payment"
		}
	},
	config: {
		fromTokenValid: 'http://staging-registratura-back.webproductionlabs.com/api/auth/login',
		tokenKey: 'dgitl-web-app-token',
		userKey: 'dgitl-web-app-user',
		storageKey: "dtigl-web-app",
		copyrightText: "Copyright © DGITL Sector 4 2021",
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
			}
		}
	},
	interop: {
		basePath: "http://staging-registratura-back.webproductionlabs.com",
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
