import { Component, OnDestroy, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
})
export class GaugesComponent implements OnInit, OnDestroy {

  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  heading = 'Gauges';
  subheading = 'Create wonderful animated gauges that can be used in combination with other ArchitectUI elements.';
  icon = 'pe-7s-car icon-gradient bg-warm-flame';

  percentageValue: (value: number) => string;

  gaugeValues: any = {
    1: 100,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 50
  };

  interval: any;

  constructor() {
    this.percentageValue = function (value: number): string {
      return `${Math.round(value)} / ${this.max}`;
    };
  }

  ngOnInit(): void {
    const updateValues = (): void => {
      this.gaugeValues = {
        1: Math.round(Math.random() * 100),
        2: Math.round(Math.random() * 100),
        3: Math.round(Math.random() * 100),
        4: Math.round(Math.random() * 100),
        5: Math.round(Math.random() * 200),
        6: Math.round(Math.random() * 100),
        7: Math.round(Math.random() * 100)
      };
    };

    const INTERVAL = 5000;

    this.interval = setInterval(updateValues, INTERVAL);
    updateValues();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
