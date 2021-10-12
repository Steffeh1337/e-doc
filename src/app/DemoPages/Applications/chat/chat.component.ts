import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';





@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  toggleMobileSidebar: any;
  faStar = faStar;
  faBusinessTime = faBusinessTime;
  faCog = faCog;
  faCalendarAlt = faCalendarAlt;
  faSearch = faSearch;

  constructor() { }

  ngOnInit() {
  }

}
