import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'ngx-countup';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountUpComponent } from './count-up.component';
import { CountUpRoutingModule } from './count-up-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule,
    CountUpModule,
    FontAwesomeModule,
    CountUpRoutingModule,
    PageTitleModule
  ],
  declarations: [CountUpComponent]
})
export class CountUpModules { }
