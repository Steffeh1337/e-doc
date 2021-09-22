import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { ClipboardComponent } from './clipboard.component';
import { ClipboardRoutingModule } from './clipboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';


@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, ClipboardModule,
    ClipboardRoutingModule, PageTitleModule
  ],
  declarations: [ClipboardComponent]
})
export class ClipboardModules { }
