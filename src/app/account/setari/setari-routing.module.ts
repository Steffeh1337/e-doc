import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetariComponent } from './setari.component';

const routes: Routes = [
    {
        path: '',
        component: SetariComponent,
        data: {
            title: 'Setari Cont'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SetariRoutingModule { }
