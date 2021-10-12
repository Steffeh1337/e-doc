import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { GridListComponent } from './grid-list.component';
import { GridListRoutingModule } from './grid-list.-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GridListRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatListModule,
    MatGridListModule,
    PageTitleModule
  ],
  declarations: [GridListComponent]
})
export class GridListModule { }
