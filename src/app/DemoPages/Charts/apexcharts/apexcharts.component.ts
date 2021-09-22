import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-apexcharts',
  templateUrl: './apexcharts.component.html',
  styles: []
})
export class ApexchartsComponent {
  heading = 'Apex Charts';
  subheading = 'Wonderful animated charts built as a Angular component.';
  icon = 'pe-7s-graph2 icon-gradient bg-happy-green';

  @ViewChild('chart') chart: ChartComponent;

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('Basic Chart'),
      type: new FormControl('line'),
      height: new FormControl(350),
      series: new FormArray([
        new FormGroup({
          name: new FormControl('Series'),
          type: new FormControl('line'),
          data: new FormArray([
            new FormControl(this.getRandomArbitrary(0, 100)),
            new FormControl(this.getRandomArbitrary(0, 100)),
            new FormControl(this.getRandomArbitrary(0, 100)),
            new FormControl(this.getRandomArbitrary(0, 100))
          ])
        })
      ]),
      xaxis: new FormArray([
        new FormControl('Jan'),
        new FormControl('Feb'),
        new FormControl('Mar'),
        new FormControl('Apr')
      ])
    });
  }

  addValue() {
    (this.form.get('series') as FormArray).controls.forEach((c) => {
      (c.get('data') as FormArray).push(new FormControl(this.getRandomArbitrary(0, 100)));
    });
    (this.form.get('xaxis') as FormArray).push(new FormControl('Jan'));
  }

  addSeries() {
    (this.form.get('series') as FormArray).push(new FormGroup({
      name: new FormControl('Series'),
      type: new FormControl('line'),
      data: new FormArray([
        new FormControl(this.getRandomArbitrary(0, 100)),
        new FormControl(this.getRandomArbitrary(0, 100)),
        new FormControl(this.getRandomArbitrary(0, 100)),
        new FormControl(this.getRandomArbitrary(0, 100))
      ])
    }));
  }

  private getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}
