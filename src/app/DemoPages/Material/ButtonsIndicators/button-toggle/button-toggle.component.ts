import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styles: []
})
export class ButtonToggleComponent implements OnInit {

  heading = 'Button Toggle';
  subheading = 'These elements are on/off toggles with the appearance of a button.';
  icon = 'pe-7s-umbrella icon-gradient bg-sunny-morning';

  constructor() {
  }

  ngOnInit() {
  }

}
