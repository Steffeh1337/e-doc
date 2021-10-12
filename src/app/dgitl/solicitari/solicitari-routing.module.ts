import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitariComponent } from './solicitari.component';

const routes: Routes = [
    {
        path: '',
        component: SolicitariComponent,
        data: {
            title: 'Solicitari'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SolicitariRoutingModule { }
