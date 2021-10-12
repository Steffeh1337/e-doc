import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipsPopoversComponent } from './tooltips-popovers.component';
import { TooltipsPopoversRoutingModule } from './tooltips-popovers-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, NgbModule,
    TooltipsPopoversRoutingModule, PageTitleModule
  ],
  declarations: [TooltipsPopoversComponent]
})
export class TooltipsPopoversModule { }
