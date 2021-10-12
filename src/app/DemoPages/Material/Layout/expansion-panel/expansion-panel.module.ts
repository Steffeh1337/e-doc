import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';;
import { MatIconModule } from '@angular/material/icon';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { ExpansionPanelRoutingModule } from './expansion-panel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ExpansionPanelRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    PageTitleModule,
  ],
  declarations: [ExpansionPanelComponent]
})
export class ExpansionPanelModule { }
