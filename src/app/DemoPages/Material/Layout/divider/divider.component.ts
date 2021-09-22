import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styles: []
})
export class DividerComponent implements OnInit {

  heading = 'Dividers';
  subheading = 'This is a component that allows for Material styling of a line separator with various orientation options.';
  icon = 'pe-7s-radio icon-gradient bg-strong-bliss';

  constructor() {
  }

  ngOnInit() {
  }

}
