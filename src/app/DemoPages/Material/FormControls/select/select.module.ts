import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { SelectComponent } from './select.component';
import { SelectRoutingModule } from './select-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SelectRoutingModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    PageTitleModule,

  ],
  declarations: [SelectComponent]
})
export class SelectModule { }
