import { Component, QueryList, ViewChildren } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';
import { CountryService } from './demo/country.service';
import { Country } from './demo/country';
import { NgbdSortableHeaderDirective, SortEvent } from './demo/sortable.directive';

// @ts-ignore
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  providers: [CountryService, DecimalPipe]
})
export class DynamicComponent {

  heading = 'Dynamic Tables';
  subheading = 'Basic example of Angular 7 table with sort, search and filter functionality.';
  icon = 'pe-7s-notebook icon-gradient bg-mixed-hopes';

  countries$: Observable<Country[]>;
  total$: Observable<number>;

  // @ts-ignore
  @ViewChildren(NgbdSortableHeaderDirective) headers: QueryList<NgbdSortableHeaderDirective>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
