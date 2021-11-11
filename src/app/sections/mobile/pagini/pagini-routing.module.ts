import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginiComponent } from './pagini.component';

const routes: Routes = [
    {
        path: '',
		component: PaginiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PaginiRoutingModule {
}
