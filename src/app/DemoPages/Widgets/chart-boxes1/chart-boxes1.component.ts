import { Component, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-chart-boxes1',
  templateUrl: './chart-boxes1.component.html',
  styles: []
})
export class ChartBoxes1Component implements OnInit {

  faAngleUp = faAngleUp;
  faEllipsisH  = faEllipsisH;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faAngleDown = faAngleDown;

  heading = 'Chart Boxes';
  subheading = 'These boxes can be used to show numbers and data in a breautiful user friendly way.';
  icon = 'pe-7s-star icon-gradient bg-ripe-malin';

  constructor() {
  }

  ngOnInit() {
  }

}
