import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Form Widgets',
      status: false
    },
    children: [
      {
        path: 'datepicker',
        loadChildren: () => import('./datepicker/datepicker.module').then(m => m.DatepickerModule)
      },
      {
        path: 'timepicker',
        loadChildren: () => import('./timepicker/timepicker.module').then(m => m.TimepickerModule)
      },
      {
        path: 'typeahead',
        loadChildren: () => import('./typeahead/typeahead.module').then(m => m.TypeaheadModule)
      },
      {
        path: 'range-slider',
        loadChildren: () => import('./range-slider/range-slider.module').then(m => m.RangeSliderModule)
      },
      {
        path: 'input-selects',
        loadChildren: () => import('./input-selects/input-selects.module').then(m => m.InputSelectsModule)
      },
      {
        path: 'toggle-switch',
        loadChildren: () => import('./toggle-switch/toggle-switch.module').then(m => m.ToggleSwitchModule)
      },
      {
        path: 'wysiwyg-editors',
        loadChildren: () => import('./wysiwyg-editor/wysiwyg-editor.module').then(m => m.WysiwygEditorModule)
      },
      {
        path: 'input-mask',
        loadChildren: () => import('./input-mask/input-mask.module').then(m => m.InputMaskModule)
      },
      {
        path: 'clipboard',
        loadChildren: () => import('./clipboard/clipboard.module').then(m => m.ClipboardModules)
      },
      {
        path: 'textarea-autosize',
        loadChildren: () => import('./textarea-autosize/textarea-autosize.module').then(m => m.TextareaAutosizeModules)
      },
      {
        path: 'colorpicker',
        loadChildren: () => import('./colorpicker/colorpicker.module').then(m => m.ColorpickerModule)
      },
      {
        path: 'dropzone',
        loadChildren: () => import('./dropzone/dropzone.module').then(m => m.DropzoneModules)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormWidgetsRoutingModule { }
