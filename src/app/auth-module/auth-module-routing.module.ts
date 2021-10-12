import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'AuthModule',
            status: false
        },
        children: [
            {
                path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
            },
            {
                path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
            },
            {
                path: 'inregistrare', loadChildren: () => import('./register-pin/register-pin.module').then(m => m.RegisterPinModule)
            },
            {
                path: 'forgot', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
