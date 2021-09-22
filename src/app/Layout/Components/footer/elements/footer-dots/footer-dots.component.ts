import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer-dots',
  templateUrl: './footer-dots.component.html'
})
export class FooterDotsComponent implements OnInit {

  faCog = faCog;

  constructor() { }

  ngOnInit() {
  }

}
