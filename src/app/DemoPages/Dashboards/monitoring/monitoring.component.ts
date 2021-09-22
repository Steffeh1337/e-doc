import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styles: []
})
export class MonitoringComponent implements OnInit {

  faHome = faHome;
  faQuestionCircle = faQuestionCircle;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faCog = faCog;
  faAngleRight = faAngleRight;

  constructor() { }

  ngOnInit() {
  }

}
