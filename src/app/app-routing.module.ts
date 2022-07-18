import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';

// // Pages
import { ForgotPasswordBoxedComponent } from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import { LoginBoxedComponent } from './DemoPages/UserPages/login-boxed/login-boxed.component';
import { RegisterBoxedComponent } from './DemoPages/UserPages/register-boxed/register-boxed.component';

// new methods
import { AuthGuard } from './guards/auth.guard'
import { LoginGuard } from './guards/login.guard'

const routes: Routes = [

	{
		path: '',
		component: PagesLayoutComponent,
		children: [
			// User Pages
			{
				path: 'pages/login',
				loadChildren: () => import('../app/auth-module/login/login.module').then(m => m.LoginModule)
			},
			{
				path: 'pages/login-boxed', component: LoginBoxedComponent, data: { extraParameter: '' }
			},
			{
				path: 'pages/register-boxed', component: RegisterBoxedComponent, data: { extraParameter: '' }
			},
			{
				path: 'pages/forgot-password-boxed', component: ForgotPasswordBoxedComponent, data: { extraParameter: '' }
			},
			{
				path: '',
				redirectTo: 'pages/login',
				pathMatch: 'full'
			},
		]
	},

	// new section/menus
	{
		path: '',
		component: PagesLayoutComponent,
		children: [
			{
				path: 'auth',
				loadChildren: () => import('./auth-module/auth-module.module').then(m => m.AuthModuleModule),
				canActivate: [LoginGuard]
			}
		],
	},
	{
		path: '',
		component: BaseLayoutComponent,
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('./dashboard/main/main.module').then(m => m.MainModule),
				pathMatch: 'full',
				canActivate: [AuthGuard],
			},
			{
				path: 'appointments',
				loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule),
				pathMatch: 'full',
				canActivate: [AuthGuard],
			},
			{
				path: 'notifications',
				loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule),
				pathMatch: 'full',
				canActivate: [AuthGuard],
			},
			{
				path: 'reviews',
				loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsModule),
				pathMatch: 'full',
				canActivate: [AuthGuard]
			},
			{
				path: 'settings',
				loadChildren: () => import('./account/setari/setari.module').then(m => m.SetariModule),
				pathMatch: 'full',
				canActivate: [AuthGuard]
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes,
		{
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled',
			relativeLinkResolution: 'legacy',
			useHash: true
		})],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
