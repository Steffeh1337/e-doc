import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent {

  heading = 'Cards';
  subheading = 'Wide selection of cards with multiple styles, borders, actions and hover effects.';
  icon = 'pe-7s-stopwatch icon-gradient bg-amy-crisp';

  constructor() {
  }

}
