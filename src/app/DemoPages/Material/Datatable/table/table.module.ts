import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    PageTitleModule,
  ],
  declarations: [TableComponent]
})
export class TableModule { }
