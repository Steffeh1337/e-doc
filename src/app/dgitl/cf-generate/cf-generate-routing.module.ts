import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CfGenerateComponent } from './cf-generate.component';

const routes: Routes = [
    {
        path: '',
        component: CfGenerateComponent,
        data: {
            title: 'Generare Certificat Fiscal'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CfGenerateRoutingModule { }
