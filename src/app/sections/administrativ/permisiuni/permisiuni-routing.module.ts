import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PermisiuniComponent } from './permisiuni.component';

const routes: Routes = [
    {
        path: '',
		component: PermisiuniComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PermisiuniRoutingModule {
}
