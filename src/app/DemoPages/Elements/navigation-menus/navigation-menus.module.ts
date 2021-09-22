import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenusComponent } from './navigation-menus.component';
import { NavigationMenusRoutingModule } from './navigation-menus-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule,
    NavigationMenusRoutingModule, NgbModule, PageTitleModule,
  ],
  declarations: [NavigationMenusComponent]
})
export class NavigationMenusModule { }
