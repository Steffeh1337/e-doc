import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicComponent } from './dynamic.component';
import { DynamicRoutingModule } from './dynamic-routing.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, NgbModule,
    DynamicRoutingModule,
  ],
  declarations: [DynamicComponent],
  exports: [DynamicComponent]
})
export class DynamicModule { }
