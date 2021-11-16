import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetariComponent } from './setari.component';

const routes: Routes = [
    {
        path: '',
		component: SetariComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SetariRoutingModule {
}
