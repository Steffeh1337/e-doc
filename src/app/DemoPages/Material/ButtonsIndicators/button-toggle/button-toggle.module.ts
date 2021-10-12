import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';;
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { ButtonToggleComponent } from './button-toggle.component';
import { ButtonToggleRoutingModule } from './button-toggle-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonToggleRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatIconModule,
    PageTitleModule,
  ],
  declarations: [ButtonToggleComponent]
})
export class ButtonToggleModule { }
