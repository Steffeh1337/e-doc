import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styles: []
})
export class ClipboardComponent implements OnInit {
  heading = 'Clipboard';
  subheading = 'You can copy/paste text with this Vue2 form widget.';
  icon = 'pe-7s-phone icon-gradient bg-premium-dark';

  text1: string;
  text2: string;
  textModal: string;
  isCopied1: boolean;
  isCopied2: boolean;
  isCopied3: boolean;
  basic = false;

  constructor(private clipboardService: ClipboardService) {
  }

  callServiceToCopy() {
    this.clipboardService.copyFromContent('This is copy thru service copyFromContent directly');
  }

  onCopyFailure() {
    alert('copy fail!');
  }

  ngOnInit(): void {
  }

}
