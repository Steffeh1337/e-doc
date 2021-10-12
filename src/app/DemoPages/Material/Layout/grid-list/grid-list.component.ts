import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styles: [`
    mat-grid-tile {
      background: var(--info);
    }`]
})
export class GridListComponent implements OnInit {

  heading = 'Grid List';
  subheading = 'The grid is a two-dimensional list view that arranges cells into grid-based layout.';
  icon = 'pe-7s-signal icon-gradient bg-malibu-beach';

  tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
