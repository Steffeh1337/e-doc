import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';

// // Pages

import { ForgotPasswordComponent } from './auth-module/forgot-password/forgot-password.component';
import { ForgotPasswordBoxedComponent } from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import { LoginBoxedComponent } from './DemoPages/UserPages/login-boxed/login-boxed.component';
// import { LoginComponent } from './DemoPages/UserPages/login2/login.component';
import { RegisterBoxedComponent } from './DemoPages/UserPages/register-boxed/register-boxed.component';

// new methods

import { LoginComponent } from '../app/auth-module/login/login.component'

import { AuthGuard } from './guards/auth.guard'
import { LoginGuard } from './guards/login.guard'

const routes: Routes = [
	// {
	// 	path: '',
	// 	component: BaseLayoutComponent,
	// 	children: [
	// 		{
	// 			path: 'apps',
	// 			loadChildren: () => import('./DemoPages/Applications/Applications.module').then(m => m.ApplicationModule)
	// 		},
	// 		{
	// 			path: 'charts',
	// 			loadChildren: () => import('./DemoPages/Charts/Charts.module').then(m => m.ChartModule)
	// 		},
	// 		{
	// 			path: 'components',
	// 			loadChildren: () => import('./DemoPages/Components/Components.module').then(m => m.ComponentsDrawerModule)
	// 		},
	// 		{
	// 			path: 'dashboards',
	// 			loadChildren: () => import('./DemoPages/Dashboards/Dashboards.module').then(m => m.DashboardsModule),
	// 			canActivate: [AuthGuard] 
	// 		},
	// 		{
	// 			path: 'elements',
	// 			loadChildren: () => import('./DemoPages/Elements/Elements.module').then(m => m.ElementsModule)
	// 		},
	// 		{
	// 			path: 'form-elements',
	// 			loadChildren: () => import('./DemoPages/Forms/Elements/form-elements.module').then(m => m.FormElementModule)
	// 		},
	// 		{
	// 			path: 'form-widgets',
	// 			loadChildren: () => import('./DemoPages/Forms/Widgets/forms-widgets.module').then(m => m.FormWidgetsModule)
	// 		},
	// 		{
	// 			path: 'button-indicators',
	// 			loadChildren: () => import('./DemoPages/Material/ButtonsIndicators/buttonsIndicators.module').then(m => m.MateriaButoonIndicatorslModule)
	// 		},
	// 		{
	// 			path: 'layout',
	// 			loadChildren: () => import('./DemoPages/Material/Layout/layout.module').then(m => m.MaterialLayoutModule)
	// 		},
	// 		{
	// 			path: 'form-controls',
	// 			loadChildren: () => import('./DemoPages/Material/FormControls/formcontrols.module').then(m => m.MaterialFormControlModule)
	// 		},
	// 		{
	// 			path: 'material',
	// 			loadChildren: () => import('./DemoPages/Material/Material.module').then(m => m.MaterialModule)
	// 		},
	// 		{
	// 			path: 'widgets',
	// 			loadChildren: () => import('./DemoPages/Widgets/Widgets.module').then(m => m.WidgetsModule)
	// 		},
	// 		{
	// 			path: 'tables/bootstrap',
	// 			loadChildren: () => import('./DemoPages/Tables/tables-main/tables-main.module').then(m => m.TablesMainModule)
	// 		},
	// 		{
	// 			path: '',
	// 			redirectTo: 'dashboards/analytics',
	// 			pathMatch: 'full'
	// 		},
	// 	]
	// },
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
				path: 'pages/forgot-password', component: ForgotPasswordComponent, data: { extraParameter: '' }
			},
			{
				path: 'pages/forgot-password-boxed', component: ForgotPasswordBoxedComponent, data: { extraParameter: '' }
			},
			{
				path: '',
				redirectTo: 'pages/login',
				pathMatch: 'full'
			},
			// new methods, final stay
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
				path: 'setari',
				loadChildren: () => import('./account/setari/setari.module').then(m => m.SetariModule),
				pathMatch: 'full',
				canActivate: [AuthGuard],
			},
			{
				path: 'dgitl-add-solicitare',
				loadChildren: () => import('./dgitl/add-solicitare/add-solicitare.module').then(m => m.AddSolicitareModule),
				pathMatch: 'full',
				canActivate: [AuthGuard],
			},
			{
				path: 'dgitl-solicitari',
				loadChildren: () => import('./dgitl/solicitari/solicitari.module').then(m => m.SolicitariModule),
				pathMatch: 'full',
				canActivate: [AuthGuard],
			},
            {
				path: 'plati',
				loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule),
				pathMatch: 'full',
				canActivate: [AuthGuard],
			},
			{
				path: 'dgitl-view-solicitare/:solicitareId',
				loadChildren: () => import('./dgitl/view-solicitare/view-solicitare.module').then(m => m.ViewSolicitareModule),
				pathMatch: 'full',
				canActivate: [AuthGuard],
			},
			{
				path: 'dashboard/main',
				loadChildren: () => import('./dashboard/main/main.module').then(m => m.MainModule),
				pathMatch: 'full',
				canActivate: [AuthGuard],
			},
			{
				path: 'dgitl-cf-generate',
				loadChildren: () => import('./dgitl/cf-generate/cf-generate.module').then(m => m.CfGenerateModule),
				pathMatch: 'full',
				canActivate: [AuthGuard],
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
