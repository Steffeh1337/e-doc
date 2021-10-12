import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { MatTabsComponent } from './mat-tabs.component';
import { MatTabsRoutingModule } from './mat-tabs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatTabsRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    PageTitleModule,
  ],
  declarations: [MatTabsComponent]
})
export class MatTabsModules { }
