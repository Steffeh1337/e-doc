import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styles: [`
    .example-h2 {
      margin: 10px;
    }

    .example-section {
      display: flex;
      align-content: center;
      align-items: center;
      height: 60px;
    }

    .example-margin {
      margin: 0 10px;
    }`]
})
export class ProgressSpinnerComponent implements OnInit {

  heading = 'Material Spinners';
  subheading = 'These are a circular indicators of progress and activity.';
  icon = 'pe-7s-moon icon-gradient bg-amy-crisp';

  color = 'primary';
  mode = 'determinate';
  value = 50;

  constructor() {
  }

  ngOnInit() {
  }

}
