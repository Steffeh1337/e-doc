import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shadow',
  templateUrl: './shadow.component.html',
  styles: []
})
export class ShadowComponent implements OnInit {

  heading = 'Shadow Buttons';
  subheading = 'These buttons are examples of buttons with drop shadows attached.';
  icon = 'pe-7s-monitor icon-gradient bg-malibu-beach';

  progress: boolean | number = false;

  model = {
    left: true,
    middle: false,
    right: false
  };

  startLoading() {
    this.progress = 0; // starts spinner

    setTimeout(() => {
      this.progress = 0.5; // sets progress bar to 50%

      setTimeout(() => {
        this.progress = 1; // sets progress bar to 100%

        setTimeout(() => {
          this.progress = false; // stops spinner
        }, 200);
      }, 500);
    }, 400);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
