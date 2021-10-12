import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea-autosize',
  templateUrl: './textarea-autosize.component.html',
  styles: []
})
export class TextareaAutosizeComponent implements OnInit {

  heading = 'Textarea Autosize';
  subheading = 'Create textareas that grow in height based on their content.';
  icon = 'pe-7s-switch icon-gradient bg-plum-plate';

  constructor() {
  }

  ngOnInit() {
  }

}
