import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './badges.component';
import { BadgesRoutingModule } from './badges-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, NgbModule,
    BadgesRoutingModule, PageTitleModule,
  ],
  declarations: [BadgesComponent]
})
export class BadgesModule { }
