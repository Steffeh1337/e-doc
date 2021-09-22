import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';

// // Pages

import { ForgotPasswordComponent } from './DemoPages/UserPages/forgot-password/forgot-password.component';
import { ForgotPasswordBoxedComponent } from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import { LoginBoxedComponent } from './DemoPages/UserPages/login-boxed/login-boxed.component';
import { LoginComponent } from './DemoPages/UserPages/login/login.component';
import { RegisterBoxedComponent } from './DemoPages/UserPages/register-boxed/register-boxed.component';
import { RegisterComponent } from './DemoPages/UserPages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'apps',
        loadChildren: () => import('./DemoPages/Applications/Applications.module').then(m => m.ApplicationModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./DemoPages/Charts/Charts.module').then(m => m.ChartModule)
      },
      {
        path: 'components',
        loadChildren: () => import('./DemoPages/Components/Components.module').then(m => m.ComponentsDrawerModule)
      },
      {
        path: 'dashboards',
        loadChildren: () => import('./DemoPages/Dashboards/Dashboards.module').then(m => m.DashboardsModule)
      },
      {
        path: 'elements',
        loadChildren: () => import('./DemoPages/Elements/Elements.module').then(m => m.ElementsModule)
      },
      {
        path: 'form-elements',
        loadChildren: () => import('./DemoPages/Forms/Elements/form-elements.module').then(m => m.FormElementModule)
      },
      {
        path: 'form-widgets',
        loadChildren: () => import('./DemoPages/Forms/Widgets/forms-widgets.module').then(m => m.FormWidgetsModule)
      },
      {
        path: 'button-indicators',
        loadChildren: () => import('./DemoPages/Material/ButtonsIndicators/buttonsIndicators.module').then(m => m.MateriaButoonIndicatorslModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./DemoPages/Material/Layout/layout.module').then(m => m.MaterialLayoutModule)
      },
      {
        path: 'form-controls',
        loadChildren: () => import('./DemoPages/Material/FormControls/formcontrols.module').then(m => m.MaterialFormControlModule)
      },
      {
        path: 'material',
        loadChildren: () => import('./DemoPages/Material/Material.module').then(m => m.MaterialModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./DemoPages/Widgets/Widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'tables/bootstrap',
        loadChildren: () => import('./DemoPages/Tables/tables-main/tables-main.module').then(m => m.TablesMainModule)
      },
      {
        path: '',
        redirectTo: 'dashboards/analytics',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
      // User Pages
      {
        path: 'pages/login', component: LoginComponent, data: { extraParameter: '' }
      },
      {
        path: 'pages/login-boxed', component: LoginBoxedComponent, data: { extraParameter: '' }
      },
      {
        path: 'pages/register', component: RegisterComponent, data: { extraParameter: '' }
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
