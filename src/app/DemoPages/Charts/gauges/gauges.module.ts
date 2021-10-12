import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeModule } from 'angular-gauge';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { GaugesComponent } from './gauges.component';
import { GaugesRoutingModule } from './gauges-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule, GaugeModule,
    RoundProgressModule, NgbModule,
    PerfectScrollbarModule,
    GaugesRoutingModule, PageTitleModule, FontAwesomeModule
  ],
  declarations: [GaugesComponent],
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
})
export class GaugesModule { }
