import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoSectionsComponent } from './info-sections.component';

const routes: Routes = [
    {
        path: '',
        component: InfoSectionsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InfoSectionsRoutingModule { }
