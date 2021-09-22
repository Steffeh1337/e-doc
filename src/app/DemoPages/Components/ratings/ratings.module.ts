import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingsComponent } from './ratings.component';
import { RatingsRoutingModule } from './ratings-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, NgbModule,
    RatingsRoutingModule, PageTitleModule,
  ],
  declarations: [RatingsComponent]
})
export class RatingsModule { }
