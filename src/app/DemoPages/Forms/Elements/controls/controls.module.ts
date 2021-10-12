import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './controls.component';
import { ControlsRoutingModule } from './controls-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, NgbModule,
    ControlsRoutingModule, PageTitleModule,
  ],
  declarations: [ControlsComponent]
})
export class ControlsModule { }
