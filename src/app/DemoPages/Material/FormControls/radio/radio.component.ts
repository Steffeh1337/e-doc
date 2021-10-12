import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  heading = 'Material Radios';
  subheading = 'This component enhances the form radio input with Material Design styling and animations.';
  icon = 'pe-7s-filter icon-gradient bg-grow-early';

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  labelPosition = 'before';

  state = '';
  selectedState = '';

  changeLablesPositions() {
    this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
  }

  changeState() {
    this.state = this.selectedState;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
