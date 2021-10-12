import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [`
    .example-form {
      min-width: 150px;
      width: 100%;
    }

    .example-full-width {
      width: 100%;
    }`]
})
export class InputComponent implements OnInit {

  heading = 'Material Inputs';
  subheading = 'This component adds Material Design styles and animations to the regular forms input element.';
  icon = 'pe-7s-glasses icon-gradient bg-love-kiss';

  value = 'Clear me';

  constructor() {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }
}
