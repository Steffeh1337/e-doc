import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticoleComponent } from './articole.component';

const routes: Routes = [
    {
        path: '',
		component: ArticoleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArticoleRoutingModule {
}
