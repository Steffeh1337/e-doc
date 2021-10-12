import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styles: [`
    .star {
      font-size: 1.5rem;
      color: var(--primary);
    }

    .filled {
      color: var(--success);
    }

    .bad {
      color: var(--warning);
    }

    .filled.bad {
      color: var(--danger);
    }

    .star2 {
      position: relative;
      display: inline-block;
      font-size: 3rem;
      color: var(--gray);
    }

    .full {
      color: var(--info);
    }

    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: var(--danger);
    }
  `]
})
export class RatingsComponent implements OnInit {

  heading = 'Ratings';
  subheading = 'Display beautiful ratings with custom icons, stars and colors.';
  icon = 'pe-7s-diamond icon-gradient bg-warm-flame';

  currentRate = 6;
  currentRate3 = 7;
  currentRate2 = 3.14;
  selected = 0;
  hovered = 0;
  readonly = false;

  constructor() {
  }

  ngOnInit() {
  }

}
