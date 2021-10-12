import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToggleSwitchComponent {

  heading = 'Toggle Switch';
  subheading = 'Instead of regular checkboxes, use these toggle widgets for a better UX.';
  icon = 'pe-7s-news-paper icon-gradient bg-grow-early';

  public offText = 'Off Text';
  public baseClass = 'bootstrap-switch';
  public size = 'normal';
  public animate = false;
  public animated = false;
  public disabled = false;
  public readonly = false;
  public indeterminate = false;
  public inverse = true;
  public color = 'default';
  public onText = '';
  public offColor = '';
  public labelText = '';
  public state = false;
  public value = true;
  public inverseValue = false;
  public handleWidth = 'auto';
  public labelWidth = 'auto';
  public offColorValue = false;
  public offTextValue = false;
  public form: FormGroup;
  public model: any = {};
  public wrapperClass = 'bootstrap-switch';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      view: [null, Validators.required]
    });
  }

  toggleDisable() {
    if (this.form.disabled) {
      console.log('enable form');
      this.form.enable();
    } else {
      console.log('disable form');
      this.form.disable();
    }
  }

  getAlert(value: any): void {
    alert(value);
  }

  onChange(event) {
    console.log(event);
  }
}
