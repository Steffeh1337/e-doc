import { Component, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-chart-boxes2',
  templateUrl: './chart-boxes2.component.html',
  styles: []
})
export class ChartBoxes2Component implements OnInit {

  faAngleUp = faAngleUp;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faAngleDown = faAngleDown;

  heading = 'Chart Boxes II';
  subheading = 'Unlimited styles are available for our chart boxes. Check out our dashboard examples for more.';
  icon = 'pe-7s-plug icon-gradient bg-arielle-smile';

  constructor() {
  }

  ngOnInit() {
  }

}
