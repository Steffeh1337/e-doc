import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { MenuMatComponent } from './menu.component';
import { MenuMatRoutingModule } from './menu-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MenuMatRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    PageTitleModule,
  ],
  declarations: [MenuMatComponent]
})
export class MenuMatModule { }
