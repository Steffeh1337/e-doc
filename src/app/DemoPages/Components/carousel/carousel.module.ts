import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselComponent } from './carousel.component';
import { CarouselRoutingModule } from './carousel-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, SlickCarouselModule, NgbModule,
    CarouselRoutingModule, PageTitleModule,
  ],
  declarations: [CarouselComponent]
})
export class CarouselModule { }
