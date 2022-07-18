// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	config: {
		fromTokenValid: 'http://operator-back.stef.lc/api/login',
		tokenKey: 'e-doc-web-app-token',
		userKey: 'e-doc-web-app-user',
		storageKey: "e-doc-web-app",
		copyrightText: "E-DOC",
		defaultLNG: 'ro',
		emailRegex: "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
		codeSMSRegex: /^[0-9]+$/,
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
				success: "Succes",
				error: "Eroare",
				successForm: "Felicitari!"
			},
			generalMessages: {
				error: "Ne pare rau, dar am intampinat o problema. Va rugam sa reincercati. Daca problema persista, va rugam sa ne contactati prin butonul de suport IT."
			}
		}
	},
	interop: {
		basePath: "http://operator-back.stef.lc",
		user: {
			loginUrl: '/api/login',
			refreshLogin: '/api/refresh-login',
			findDetails: '/api/user/find-details',
			updatePasswordAccount: '/api/user/password',
			updateInfoAccount: '/api/user/profile-update',
			updateSchedule: '/api/user/schedule'
		},
		api: {
			appointments: {
				getData: '/api/appointments/get-data',
				list: '/api/appointments',
				review: '/api/appointment/review/',
				cancel: '/api/appointment/cancel/'
			},
			notifications: {
				list: '/api/notifications',
				find: '/api/notification/',
				count: '/api/notifications-count',
				markAsRead: '/api/notification-read/'
			},
			reviews: {
				list: '/api/reviews'
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
