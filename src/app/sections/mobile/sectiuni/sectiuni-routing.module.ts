import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectiuniComponent } from './sectiuni.component';

const routes: Routes = [
    {
        path: '',
		component: SectiuniComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SectiuniRoutingModule {
}
