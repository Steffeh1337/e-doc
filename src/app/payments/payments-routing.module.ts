import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsComponent } from './payments.component';

const routes: Routes = [
    {
        path: '',
        component: PaymentsComponent,
        data: {
            title: 'Platile Mele'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PaymentsRoutingModule { }
