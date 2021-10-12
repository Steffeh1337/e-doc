import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-tabs',
  templateUrl: './mat-tabs.component.html',
  styles: [`
    .demo-tab-group {
      border: 1px solid #e8e8e8;
    }

    .demo-tab-content {
      padding: 16px;
    }`]
})
export class MatTabsComponent implements OnInit {

  heading = 'Material Tabs';
  subheading = 'Angular Material tabs organize content into separate views where only one view can be visible at a time.';
  icon = 'pe-7s-star icon-gradient bg-ripe-malin';

  constructor() {
  }

  ngOnInit() {
  }

}
