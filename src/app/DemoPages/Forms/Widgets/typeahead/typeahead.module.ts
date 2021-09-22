import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeaheadComponent } from './typeahead.component';
import { TypeaheadRoutingModule } from './typeahead-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, NgbModule, FormsModule, ReactiveFormsModule,
    TypeaheadRoutingModule, PageTitleModule
  ],
  declarations: [TypeaheadComponent]
})
export class TypeaheadModule { }
