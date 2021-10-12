import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TextMaskModule } from 'angular2-text-mask';
// import { NgxMaskModule, IConfig } from 'ngx-mask'
import { InputMaskComponent } from './input-mask.component';
import { InputMaskRoutingModule } from './input-mask-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    InputMaskRoutingModule, PageTitleModule,
    // NgxMaskModule.forRoot(),
    //  TextMaskModule  
  ],
  declarations: [InputMaskComponent]
})
export class InputMaskModule { }
