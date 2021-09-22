import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MonitoringComponent } from './monitoring.component';
import { MonitoringRoutingModule } from './monitoring-routing.module';

@NgModule({
  imports: [
    CommonModule, RoundProgressModule, NgApexchartsModule,
    MonitoringRoutingModule, FontAwesomeModule
  ],
  declarations: [MonitoringComponent]
})
export class MonitoringModule { }
