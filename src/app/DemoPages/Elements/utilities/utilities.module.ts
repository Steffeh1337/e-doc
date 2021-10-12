import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesComponent } from './utilities.component';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule,
    UtilitiesRoutingModule, PageTitleModule
  ],
  declarations: [UtilitiesComponent]
})
export class UtilitiesModule { }
