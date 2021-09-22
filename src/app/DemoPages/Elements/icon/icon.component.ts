import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-icons',
  templateUrl: './icon.component.html',
  styles: []
})
export class ButtonIconsComponent implements OnInit {

  heading = 'Buttons with Icons';
  subheading = 'These buttons examples contain icons with or without labels attached.';
  icon = 'pe-7s-hourglass icon-gradient bg-ripe-malin';

  constructor() {
  }

  ngOnInit() {
  }

}
