import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './pagination.component';
import { PaginationRoutingModule } from './pagination-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, NgbModule, MatDatepickerModule, MatFormFieldModule,
    PaginationRoutingModule, PageTitleModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  declarations: [PaginationComponent]
})
export class PaginationModule { }
