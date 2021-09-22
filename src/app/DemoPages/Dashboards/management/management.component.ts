import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styles: []
})
export class ManagementComponent implements OnInit {

  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faDotCircle = faDotCircle;
  faArrowLeft = faArrowLeft;

  heading = 'Management';
  subheading = 'This is an example dashboard created using build-in elements and components.';
  icon = 'pe-7s-car icon-gradient bg-mean-fruit';

  public datasets = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
      datalabels: {
        display: false,
      },

    }
  ];
  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(58, 196, 125, 0.35)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderColor: '#3ac47d',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#3ac47d',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#3ac47d',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
    },
  ];

  public labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  public options = {
    layout: {
      padding: {
        left: 0,
        right: 8,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  };

  constructor() {
  }

  ngOnInit() {
  }

}
