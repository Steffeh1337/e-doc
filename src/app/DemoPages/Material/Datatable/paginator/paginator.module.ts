import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorComponent } from './paginator.component';
import { PaginatorRoutingModule } from './paginator-routing.module';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    PageTitleModule,
  ],
  declarations: [PaginatorComponent]
})
export class PaginatorModule { }
