import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styles: [`
    .example-headers-align .mat-expansion-panel-header-title,
    .example-headers-align .mat-expansion-panel-header-description {
      flex-basis: 0;
    }

    .example-headers-align .mat-expansion-panel-header-description {
      justify-content: space-between;
      align-items: center;
    }`]
})
export class ExpansionPanelComponent implements OnInit {

  heading = 'Expansion Panel';
  subheading = 'The expansion panel provides an expandable details-summary view.';
  icon = 'pe-7s-map icon-gradient bg-premium-dark';

  panelOpenState = false;
  isDisabled = true;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
