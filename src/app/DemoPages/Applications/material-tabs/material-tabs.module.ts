import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaddaModule } from 'angular2-ladda';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialTabsComponent } from './material-tabs.component';
import { MaterialTabsRoutingModule } from './material-tabs-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, LaddaModule, NgbModule,
    MaterialTabsRoutingModule, PageTitleModule, MatTabsModule
  ],
  declarations: [MaterialTabsComponent]
})
export class MaterialTabsModule { }
