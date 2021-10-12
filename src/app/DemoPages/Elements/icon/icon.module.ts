import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonIconsComponent } from './icon.component';
import { ButtonIconsRoutingModule } from './icon-routing.module';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, NgbModule, FormsModule, ReactiveFormsModule,
    ButtonIconsRoutingModule, PageTitleModule,
  ],
  declarations: [ButtonIconsComponent]
})
export class ButtonIconsModule { }
