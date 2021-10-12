import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  heading = 'Checkbox';
  subheading = 'This component enhances the form checkbox input with Material Design styling and animations.';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  myValue = true;

  changeValueEvent() {
    console.log('myValue:', this.myValue);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
