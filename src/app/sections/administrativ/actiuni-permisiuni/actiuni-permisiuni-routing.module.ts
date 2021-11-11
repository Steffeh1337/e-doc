import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActiuniPermisiuniComponent } from './actiuni-permisiuni.component';

const routes: Routes = [
    {
        path: '',
		component: ActiuniPermisiuniComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ActiuniPermisiuniRoutingModule {
}
