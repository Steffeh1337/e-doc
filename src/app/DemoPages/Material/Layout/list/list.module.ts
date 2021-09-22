import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { ListMatComponent } from './list.component';
import { ListMatRoutingModule } from './list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ListMatRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    PageTitleModule,
  ],
  declarations: [ListMatComponent]
})
export class ListMatModule { }
