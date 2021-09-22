import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { SelectDropDownModule } from 'ngx-select-dropdown';
import { InputSelectsComponent } from './input-selects.component';
import { InputSelectsRoutingModule } from './input-selects-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, NgSelectModule, FormsModule, ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    // SelectDropDownModule,
    InputSelectsRoutingModule, PageTitleModule,
  ],
  declarations: [InputSelectsComponent]
})
export class InputSelectsModule { }
