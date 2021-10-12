import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styles: []
})
export class ProjectManagementComponent implements OnInit {

  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faDotCircle = faDotCircle;

  heading = 'Project Dashboard';
  subheading = 'This is an example dashboard created using build-in elements and components.';
  icon = 'pe-7s-graph icon-gradient bg-ripe-malin';

  public datasets = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
      datalabels: {
        display: false,
      },

    }
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

  public datasets2 = [
    {
      label: 'My First dataset',
      data: [46, 55, 59, 80, 81, 38, 65, 59, 80],
      datalabels: {
        display: false,
      },

    }
  ];

  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(217, 37, 80, 0.35)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderColor: '#d92550',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#d92550',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#d92550',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
    },
  ];

  public lineChartColors2: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(48, 177, 255, 0.2)',
      borderColor: '#30b1ff',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#30b1ff',
      pointBackgroundColor: '#ffffff',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
