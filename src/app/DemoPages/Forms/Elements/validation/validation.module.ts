import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { ValidationComponent } from './validation.component';
import { ValidationRoutingModule } from './validation-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, NgbModule, FormsModule, ReactiveFormsModule, NgBootstrapFormValidationModule,
    ValidationRoutingModule, PageTitleModule,
  ],
  declarations: [ValidationComponent]
})
export class ValidationModule { }
