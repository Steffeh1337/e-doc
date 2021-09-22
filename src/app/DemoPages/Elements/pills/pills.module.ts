import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LaddaModule } from 'angular2-ladda';
import { PillsComponent } from './pills.component';
import { PillsRoutingModule } from './pills-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, NgbModule,
    LaddaModule,
    PillsRoutingModule, PageTitleModule
  ],
  declarations: [PillsComponent]
})
export class PillsModule { }
