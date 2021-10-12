import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pills',
  templateUrl: './pills.component.html',
  styles: []
})
export class PillsComponent implements OnInit {

  heading = 'Pills Buttons';
  subheading = 'The pills buttons from ArchitectUI have 100% rounded corners.';
  icon = 'pe-7s-bluetooth icon-gradient bg-deep-blue';

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
