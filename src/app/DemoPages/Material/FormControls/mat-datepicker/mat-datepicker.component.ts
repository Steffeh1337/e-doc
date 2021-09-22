import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// @ts-ignore
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-mat-datepicker',
  templateUrl: './mat-datepicker.component.html',
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class DatepickerComponent2 implements OnInit {

  heading = 'Material Datepicker';
  subheading = 'The datepicker allows users to enter a date either through text input, or by choosing a date from the calendar.';
  icon = 'pe-7s-phone icon-gradient bg-premium-dark';

  startDate = new Date(1990, 0, 1);

  date2 = new FormControl(moment([2017, 0, 1]));

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor() {
  }

  ngOnInit() {
  }

}
