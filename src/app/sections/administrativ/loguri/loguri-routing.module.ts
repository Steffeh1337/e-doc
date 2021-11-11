import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoguriComponent } from './loguri.component';

const routes: Routes = [
    {
        path: '',
		component: LoguriComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoguriRoutingModule {
}
