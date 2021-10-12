import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageTitleComponent } from './page-title.component';
import { PageTitleRoutingModule } from './page-title-routing.module';

@NgModule({
  imports: [
    CommonModule, FontAwesomeModule,
    PageTitleRoutingModule,
  ],
  declarations: [PageTitleComponent],
  exports: [PageTitleComponent]
})
export class PageTitleModule { }
