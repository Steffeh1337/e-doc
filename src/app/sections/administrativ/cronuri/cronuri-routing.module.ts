import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CronuriComponent } from './cronuri.component';

const routes: Routes = [
    {
        path: '',
		component: CronuriComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CronuriRoutingModule {
}
