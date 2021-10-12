import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';
import { StepperComponent } from './stepper.component';
import { StepperRoutingModule } from './stepper-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StepperRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    PageTitleModule,
  ],
  declarations: [StepperComponent]
})
export class StepperModule { }
