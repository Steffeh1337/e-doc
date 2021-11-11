import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SondajeComponent } from './sondaje.component';

const routes: Routes = [
    {
        path: '',
		component: SondajeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SondajeRoutingModule {
}
