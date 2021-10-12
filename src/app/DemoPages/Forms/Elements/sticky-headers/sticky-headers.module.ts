import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyHeadersComponent } from './sticky-headers.component';
import { StickyHeadersRoutingModule } from './sticky-headers-routing.module';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule,
    StickyHeadersRoutingModule, PageTitleModule
  ],
  declarations: [StickyHeadersComponent]
})
export class StickyHeadersModule { }
