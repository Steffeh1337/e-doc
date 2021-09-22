import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuMatComponent implements OnInit {

  heading = 'Material Floating Menu';
  subheading = 'The menu component is a floating panel containing list of options.';
  icon = 'pe-7s-plug icon-gradient bg-arielle-smile';

  constructor() {
  }

  ngOnInit() {
  }

}
