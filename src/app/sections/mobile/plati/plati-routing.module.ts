import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlatiComponent } from './plati.component';

const routes: Routes = [
    {
        path: '',
		component: PlatiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PlatiRoutingModule {
}
