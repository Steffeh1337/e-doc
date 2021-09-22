import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-wysiwyg-editor',
  templateUrl: './wysiwyg-editor.component.html',
  styles: []
})
export class WysiwygEditorComponent implements OnInit {

  heading = 'WYSIWYG Editors';
  subheading = 'Need to add formatting to your forms? Use these Vue2 widgets.';
  icon = 'pe-7s-like icon-gradient bg-love-kiss';

  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
