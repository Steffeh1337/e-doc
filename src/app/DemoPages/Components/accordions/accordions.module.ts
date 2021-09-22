import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionsComponent } from './accordions.component';
import { AccordionsRoutingModule } from './accordions-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, NgbModule,
    AccordionsRoutingModule, PageTitleModule
  ],
  declarations: [AccordionsComponent]
})
export class AccordionsModule { }
