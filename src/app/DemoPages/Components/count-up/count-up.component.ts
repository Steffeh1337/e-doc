import { Component, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-count-up',
  templateUrl: './count-up.component.html',
})
export class CountUpComponent implements OnInit {

  faAngleUp = faAngleUp;
  faArrowLeft = faArrowLeft

  heading = 'Count Up';
  subheading = 'Add animations to your numbers. It\'ll make your next Architect app more user friendly.';
  icon = 'pe-7s-signal icon-gradient bg-malibu-beach';

  constructor() {
  }

  myVal = '345';
  myVal2 = '138';
  myVal3 = '544';
  myVal4 = '4567';
  myVal5 = '6575';

  myOpts = {
    prefix: '',
    suffix: 'k',
    duration: 6.8,
  };

  myOpts2 = {
    prefix: '$',
    suffix: '',
    duration: 8.8,
  };

  ngOnInit() {
  }

}
