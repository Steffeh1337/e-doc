import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapsComponent } from './maps.component';
import { MapsRoutingModule } from './maps-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, AgmCoreModule, NgbModule,
    MapsRoutingModule, PageTitleModule
  ],
  declarations: [MapsComponent]
})
export class MapsModule { }
