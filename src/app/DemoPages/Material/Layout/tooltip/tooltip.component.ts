import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styles: [`
    .example-tooltip-host {
      display: inline-flex;
      align-items: center;
      margin: 50px;
    }

    .example-select {
      margin: 0 10px;
    }`]
})
export class TooltipComponent implements OnInit {

  heading = 'Tooltips';
  subheading = 'The Angular Material tooltip provides a text label that is displayed when the user hovers over or longpresses an element.';
  icon = 'pe-7s-science icon-gradient bg-happy-itmeo';

  position = 'before';

  constructor() {
  }

  ngOnInit() {
  }

}
