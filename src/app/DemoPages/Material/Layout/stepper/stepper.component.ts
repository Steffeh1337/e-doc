import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styles: [`
    .mat-list-icon {
      color: rgba(0, 0, 0, 0.54);
    }`]
})
export class StepperComponent implements OnInit {

  heading = 'Material Stepper';
  subheading = 'Angular Material\'s stepper provides a wizard-like workflow by dividing content into logical steps.';
  icon = 'pe-7s-wallet icon-gradient bg-plum-plate';

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
