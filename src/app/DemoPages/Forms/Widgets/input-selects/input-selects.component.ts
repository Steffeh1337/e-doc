import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown/multiselect.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-input-selects',
  templateUrl: './input-selects.component.html',
  styles: []
})
export class InputSelectsComponent implements OnInit {

  heading = 'Input Selects';
  subheading = 'Create fancy multi select dropdown menus for a better user experience.';
  icon = 'pe-7s-gift icon-gradient bg-mixed-hopes';

  constructor(private fb: FormBuilder, private fromBuilder: FormBuilder) {
    this.create10kCities();
  }

  cities12 = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' }
  ];

  cities2 = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' }
  ];

  cities3 = [
    { id: 1, name: 'Vilnius', avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x' },
    { id: 2, name: 'Kaunas', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
    { id: 3, name: 'Pavilnys', avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15' }
  ];

  cities4 = [];

  users = [
    { id: 'anjmao', name: 'Anjmao' },
    { id: 'varnas', name: 'Tadeus Varnas' }
  ];

  selectedAccount = 'Adam';
  accounts = [
    { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States' },
    { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' },
    { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' },
    { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
    { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador' },
    { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador' },
    { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador' },
    { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia' },
    { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia' },
    { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia' }
  ];

  selectedCity: any;
  selectedCityIds: string[];
  selectedCityName = 'Vilnius';
  selectedCityId: number;
  selectedUserIds: number[];

  title = 'app';
  tab = 1;
  singleSelect: any = [];
  multiSelect: any = [];
  stringArray: any = [];
  objectsArray: any = [];
  stringOptions = [
    'Burns Dalton', 'Mcintyre Lawson', 'Amie Franklin', 'Jocelyn Horton', 'Fischer Erickson', 'Medina Underwood', 'Goldie Barber'
  ];
  config = {
    displayKey: 'name', // if objects array passed which key to be displayed defaults to description
    search: true,
    limitTo: 3
  };
  selectedOptions = [{
    _id: '5a66d6c31d5e4e36c7711b7a',
    index: 0,
    balance: '$2,806.37',
    picture: 'http://placehold.it/32x32',
    name: 'Burns Dalton'
  },
  {
    _id: '5a66d6c3657e60c6073a2d22',
    index: 1,
    balance: '$2,984.98',
    picture: 'http://placehold.it/32x32',
    name: 'Mcintyre Lawson'
  }];
  options = [
    {
      _id: '5a66d6c31d5e4e36c7711b7a',
      index: 0,
      balance: '$2,806.37',
      picture: 'http://placehold.it/32x32',
      name: 'Burns Dalton'
    },
    {
      _id: '5a66d6c3657e60c6073a2d22',
      index: 1,
      balance: '$2,984.98',
      picture: 'http://placehold.it/32x32',
      name: 'Mcintyre Lawson'
    },
    {
      _id: '5a66d6c376be165a5a7fae33',
      index: 2,
      balance: '$2,794.16',
      picture: 'http://placehold.it/32x32',
      name: 'Amie Franklin'
    },
    {
      _id: '5a66d6c3f7854b6b4d96333b',
      index: 3,
      balance: '$2,537.14',
      picture: 'http://placehold.it/32x32',
      name: 'Jocelyn Horton'
    },
    {
      _id: '5a66d6c31f967d4f3e9d84e9',
      index: 4,
      balance: '$2,141.42',
      picture: 'http://placehold.it/32x32',
      name: 'Fischer Erickson'
    },
    {
      _id: '5a66d6c34cfa8cddefb31602',
      index: 5,
      balance: '$1,398.60',
      picture: 'http://placehold.it/32x32',
      name: 'Medina Underwood'
    },
    {
      _id: '5a66d6c3d727c450794226de',
      index: 6,
      balance: '$3,915.65',
      picture: 'http://placehold.it/32x32',
      name: 'Goldie Barber'
    }
  ];
  selectForm: FormGroup;


  myForm: FormGroup;
  disabled = false;
  ShowFilter = true;
  showAll = true;
  limitSelection = false;
  cities: Array<any> = [];
  selectedItems: Array<any> = [];
  dropdownSettings: IDropdownSettings = {};

  addCustomUser = (term) => ({ id: term, name: term });

  private create10kCities() {
    this.cities4 = Array.from({ length: 10000 }, (value, key) => key)
      .map(val => ({
        id: val,
        name: `city ${val}`
      }));
  }

  changeValue($event: any) {
    // console.log(this.selectForm.getRawValue());
  }

  ngOnInit() {
    this.cities = [
      { item_id: 1, item_text: 'New York' },
      { item_id: 2, item_text: 'London' },
      { item_id: 3, item_text: 'Barcelona' },
      { item_id: 4, item_text: 'San Francisco' },
      { item_id: 5, item_text: 'Paris' },
      { item_id: 6, item_text: 'Berlin' }
    ];
    this.selectedItems = [
      { item_id: 4, item_text: 'San Francisco' },
      { item_id: 6, item_text: 'Berlin' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      defaultOpen: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableCheckAll: this.showAll,
      itemsShowLimit: 3,
      allowSearchFilter: this.ShowFilter
    };
    this.myForm = this.fb.group({
      city: [this.selectedItems]
    });
  }

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
    console.log('form model', this.myForm.get('city').value);
  }

  onItemDeSelect(item: any) {
    console.log('onItem DeSelect', item);
    console.log('form model', this.myForm.get('city').value);
  }

  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }

  onDropDownClose() {
    console.log('dropdown closed');
  }

  toogleShowAll() {
    this.showAll = !this.showAll;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
      enableCheckAll: this.showAll
    });
  }

  toogleShowFilter() {
    this.ShowFilter = !this.ShowFilter;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
      allowSearchFilter: this.ShowFilter
    });
  }

  handleLimitSelection() {
    if (this.limitSelection) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        limitSelection: 2
      });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        limitSelection: -1
      });
    }
  }

  handleReset() {
    this.myForm.get('city').setValue([]);
  }
}
