import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PushNotificationsComponent } from './push-notifications.component';

const routes: Routes = [
    {
        path: '',
		component: PushNotificationsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PushNotificationsRoutingModule {
}
