import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ripples',
  templateUrl: './ripples.component.html',
  styles: [`
    .example-ripple-container {
      cursor: pointer;
      text-align: center;

      width: 300px;
      height: 300px;
      line-height: 300px;

      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;

      -webkit-user-drag: none;
      -webkit-tap-highlight-color: transparent;
    }

    /** Styles to make the demo look better. */
    .example-ripple-checkbox {
      margin: 6px 12px 6px 0;
    }

    .example-ripple-form-field {
      margin: 0 12px 0 0;
    }`]
})
export class RipplesComponent implements OnInit {

  heading = 'Material Ripples';
  subheading = 'Connect user input to screen reactions by using ripples to both indicate the point of touch, and to confirm that touch input was received.';
  icon = 'pe-7s-paint icon-gradient bg-sunny-morning';

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  constructor() {
  }

  ngOnInit() {
  }

}
