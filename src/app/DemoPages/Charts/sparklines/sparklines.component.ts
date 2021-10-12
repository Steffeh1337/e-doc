import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sparklines',
  templateUrl: './sparklines.component.html',
  styles: []
})
export class SparklinesComponent implements OnInit {

  heading = 'Sparklines';
  subheading = 'Use these Sparklines charts inside other components or on their own.';
  icon = 'pe-7s-pendrive icon-gradient bg-mean-fruit';

  constructor() {
  }

  ngOnInit() {
  }

}
