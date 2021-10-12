import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
})
export class TimepickerComponent implements OnInit {

  heading = 'Timepicker';
  subheading = 'Build beautiful timepickers perfectly integrated in the style of the application.';
  icon = 'pe-7s-battery icon-gradient bg-plum-plate';

  time = { hour: 13, minute: 30 };
  meridian = true;

  time2: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  seconds = true;
  spinners = true;
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;
  time3;

  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 12) {
      return { tooEarly: true };
    }

    if (value.hour > 13) {
      return { tooLate: true };
    }

    return null;
  });

  toggleSpinners() {
    this.spinners = !this.spinners;
  }

  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
