import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons.component';
import { IconsRoutingModule } from './icons-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, NgbModule,
    IconsRoutingModule, PageTitleModule
  ],
  declarations: [IconsComponent]
})
export class IconsModule { }
