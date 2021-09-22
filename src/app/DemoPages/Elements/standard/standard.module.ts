import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaddaModule } from 'angular2-ladda';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StandardComponent } from './standard.component';
import { StandardRoutingModule } from './standard-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, LaddaModule, NgbModule,
    StandardRoutingModule, PageTitleModule,
  ],
  declarations: [StandardComponent]
})
export class StandardModule { }
