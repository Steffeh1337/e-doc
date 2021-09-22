import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorsComponent } from './loading-indicators.component';
import { LoadingIndicatorsRoutingModule } from './loading-indicators-routing.module';
import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, NgxLoadingModule.forRoot({}),
    LoadingIndicatorsRoutingModule, PageTitleModule, NgbModule,
  ],
  declarations: [LoadingIndicatorsComponent]
})
export class LoadingIndicatorsModule { }
