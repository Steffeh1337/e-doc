import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styles: [`
    .demo-chip-list {
      width: 100%;
    }`]
})
export class ChipsComponent {

  heading = 'Chips';
  subheading = 'This displays a list of values as individual, keyboard accessible, chips.';
  icon = 'pe-7s-phone icon-gradient bg-night-fade';

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  color: string;

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];


  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;


    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }


    // Reset the input value
    if (input) {
      input.value = '';
    }
  }


  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
