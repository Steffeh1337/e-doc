import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckCodeComponent } from './check-code.component';

const routes: Routes = [
    {
        path: '',
        component: CheckCodeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CheckCodeRoutingModule { }
