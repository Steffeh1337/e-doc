import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Material Form Control',
      status: false
    },
    children: [
      {
        path: 'auto-complete',
        loadChildren: () => import('./auto-complete/auto-complete.module').then(m => m.AutoCompleteModule)
      },
      {
        path: 'checkbox',
        loadChildren: () => import('./checkbox/checkbox.module').then(m => m.CheckboxModule)
      },
      {
        path: 'radio',
        loadChildren: () => import('./radio/radio.module').then(m => m.RadioModule)
      },
      {
        path: 'datepicker',
        loadChildren: () => import('./mat-datepicker/mat-datepicker.module').then(m => m.DatepickerModule)
      },
      {
        path: 'form-field',
        loadChildren: () => import('./form-field/form-field.module').then(m => m.FormFieldModule)
      },
      {
        path: 'input',
        loadChildren: () => import('./input/input.module').then(m => m.InputModule)
      },
      {
        path: 'select',
        loadChildren: () => import('./select/select.module').then(m => m.SelectModule)
      },
      {
        path: 'slider',
        loadChildren: () => import('./slider/slider.module').then(m => m.SliderModule)
      },
      {
        path: 'slider-toggle',
        loadChildren: () => import('./slider-toggle/slider-toggle.module').then(m => m.SliderToggleModule)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialFormControlRoutingModule { }
