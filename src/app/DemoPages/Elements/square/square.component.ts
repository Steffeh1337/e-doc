import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styles: []
})
export class SquareComponent implements OnInit {

  heading = 'Square Buttons';
  subheading = 'Wide selection of buttons with square corners. Their styling can be added to any button combination.';
  icon = 'pe-7s-car icon-gradient bg-mean-fruit';

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
