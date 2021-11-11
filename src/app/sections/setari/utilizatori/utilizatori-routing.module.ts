import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UtilizatoriComponent } from './utilizatori.component';

const routes: Routes = [
    {
        path: '',
		component: UtilizatoriComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UtilizatoriRoutingModule {
}
