import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-buttons',
  templateUrl: './mat-buttons.component.html',
  styles: [`
    .example-button-row {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }`]
})
export class MatButtonsComponent implements OnInit {

  heading = 'Material Buttons';
  subheading = 'Angular Material buttons are native elements enhanced with Material Design styling and ink ripples.';
  icon = 'pe-7s-voicemail icon-gradient bg-arielle-smile';

  constructor() {
  }

  ngOnInit() {
  }

}
