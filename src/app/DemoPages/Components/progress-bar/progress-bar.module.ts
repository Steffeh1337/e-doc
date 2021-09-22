import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, NgbModule,
    ProgressBarRoutingModule, PageTitleModule,
  ],
  declarations: [ProgressBarComponent]
})
export class ProgressBarModule { }
