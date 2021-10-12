import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPinComponent } from './register-pin.component';

const routes: Routes = [
    {
        path: '',
        component: RegisterPinComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RegisterPinPageRoutingModule { }
