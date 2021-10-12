import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSolicitareComponent } from './add-solicitare.component';

const routes: Routes = [
    {
        path: '',
        component: AddSolicitareComponent,
        data: {
            title: 'Adauga Solicitare'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AddSolicitareRoutingModule { }
