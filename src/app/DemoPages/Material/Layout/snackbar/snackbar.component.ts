import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styles: []
})
export class SnackbarComponent implements OnInit {

  heading = 'Snackbar notifications';
  subheading = 'This is a service for displaying snack-bar notifications.';
  icon = 'pe-7s-plug icon-gradient bg-arielle-smile';

  constructor(public snackBar: MatSnackBar) {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
  }

}
