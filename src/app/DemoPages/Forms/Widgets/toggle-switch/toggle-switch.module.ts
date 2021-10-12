import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { ToggleSwitchComponent } from './toggle-switch.component';
import { ToggleSwitchRoutingModule } from './toggle-switch-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, JwBootstrapSwitchNg2Module,
    ToggleSwitchRoutingModule, PageTitleModule
  ],
  declarations: [ToggleSwitchComponent]
})
export class ToggleSwitchModule { }
