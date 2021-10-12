import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-tabs',
  templateUrl: './material-tabs.component.html'
})
export class MaterialTabsComponent implements OnInit {

  heading = 'Material Design Tabs';
  subheading = 'You can use the Material Design Tabs for page layout sections.';
  icon = 'pe-7s-hourglass icon-gradient bg-ripe-malin';

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
