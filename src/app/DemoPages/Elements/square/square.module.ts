import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LaddaModule } from 'angular2-ladda';
import { SquareComponent } from './square.component';
import { SquareRoutingModule } from './square-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, NgbModule, LaddaModule,
    SquareRoutingModule, PageTitleModule,
  ],
  declarations: [SquareComponent]
})
export class SquareModule { }
