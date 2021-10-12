import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardsRoutingModule } from './cards-routing.module';
import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';



@NgModule({
  imports: [
    CommonModule, NgbModule, NgxLoadingModule.forRoot({}),
    CardsRoutingModule, PageTitleModule,
  ],
  declarations: [CardsComponent]
})
export class CardsModule { }
