import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TrendModule } from 'ngx-trend';

import { AnalyticsComponent } from './analytics.component';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';
import { DynamicModule } from '../../Tables/dynamic/dynamic.module';



// import { PageTitleComponent } from '../../../Layout/Components/page-title/page-title.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule, NgbModule,
    AnalyticsRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule,
    ChartsModule, NgApexchartsModule, PerfectScrollbarModule, TrendModule, PageTitleModule, DynamicModule
  ],
  declarations: [AnalyticsComponent],
  providers: [
    {
      provide:
        PERFECT_SCROLLBAR_CONFIG,
      // DROPZONE_CONFIG,
      useValue:
        DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      // DEFAULT_DROPZONE_CONFIG,
    }
  ],
  bootstrap: [AnalyticsComponent]
})
export class AnalyticsModule { }
