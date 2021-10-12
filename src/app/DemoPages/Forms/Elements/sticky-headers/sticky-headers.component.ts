import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-headers',
  templateUrl: './sticky-headers.component.html',
  styles: []
})
export class StickyHeadersComponent implements OnInit {

  heading = 'Forms Sticky Headers';
  subheading = 'Add sticky headers in forms sections!';
  icon = 'lnr-map text-info';

  constructor() {
  }

  ngOnInit() {
  }

}
