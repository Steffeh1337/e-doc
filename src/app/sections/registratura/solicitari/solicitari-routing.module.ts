import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SolicitariComponent } from './solicitari.component';

const routes: Routes = [
    {
        path: '',
		component: SolicitariComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SolicitariRoutingModule {
}
