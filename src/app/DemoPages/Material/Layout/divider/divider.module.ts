import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { DividerComponent } from './divider.component';
import { DividerRoutingModule } from './divider-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DividerRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatListModule,
    PageTitleModule,
  ],
  declarations: [DividerComponent]
})
export class DividerModule { }
