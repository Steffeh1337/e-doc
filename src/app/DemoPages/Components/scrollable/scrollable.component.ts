import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollable',
  templateUrl: './scrollable.component.html',
})
export class ScrollableComponent implements OnInit {

  heading = 'Scrollable Elements';
  subheading = 'Add scrolling areas to any elements with custom scrollbars or default browser ones.';
  icon = 'pe-7s-radio icon-gradient bg-strong-bliss';

  constructor() {
  }

  ngOnInit() {
  }

}
