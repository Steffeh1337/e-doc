import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApexchartsComponent } from './apexcharts.component';
import { ApexchartsRoutingModule } from './apexcharts-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';
import { SeriesPipe } from './series.pipe';

@NgModule({
  imports: [
    CommonModule, NgApexchartsModule, NgbModule, FormsModule, ReactiveFormsModule,
    ApexchartsRoutingModule, PageTitleModule,
  ],
  declarations: [ApexchartsComponent, SeriesPipe]
})
export class ApexchartsModule { }
