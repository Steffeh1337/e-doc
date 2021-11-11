import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SesizariComponent } from './sesizari.component';

const routes: Routes = [
    {
        path: '',
		component: SesizariComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SesizariRoutingModule {
}
