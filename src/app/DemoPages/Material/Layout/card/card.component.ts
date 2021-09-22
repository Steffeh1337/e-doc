import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [`
    .example-card {
      max-width: 400px;
    }

    .example-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }`]
})
export class CardMatComponent implements OnInit {

  heading = 'Material Cards';
  subheading = 'This is a content container for text, photos, and actions in the context of a single subject.';
  icon = 'pe-7s-signal icon-gradient bg-malibu-beach';

  constructor() {
  }

  ngOnInit() {
  }

}
