import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-profile-boxes',
  templateUrl: './profile-boxes.component.html',
  styles: []
})
export class ProfileBoxesComponent implements OnInit {

  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faDotCircle = faDotCircle;

  heading = 'Profile Boxes';
  subheading = 'These boxes are usually for dashboard elements centered around users and profiles.';
  icon = 'pe-7s-science icon-gradient bg-happy-itmeo';

  constructor() {
  }

  ngOnInit() {
  }

}
