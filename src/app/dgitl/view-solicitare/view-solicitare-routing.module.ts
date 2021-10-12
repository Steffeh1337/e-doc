import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSolicitareComponent } from './view-solicitare.component';

const routes: Routes = [
    {
        path: '',
        component: ViewSolicitareComponent,
        data: {
            title: 'Vizualizare Solicitare'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ViewSolicitarRoutingModule { }
