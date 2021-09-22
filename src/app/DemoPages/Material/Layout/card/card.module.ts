import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { CardMatComponent } from './card.component';
import { CardMatRoutingModule } from './card-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CardMatRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    PageTitleModule,
  ],
  declarations: [CardMatComponent]
})
export class CardMatModule { }
