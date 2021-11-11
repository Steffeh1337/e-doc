import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConturiComponent } from './conturi.component';

const routes: Routes = [
    {
        path: '',
		component: ConturiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConturiRoutingModule {
}
