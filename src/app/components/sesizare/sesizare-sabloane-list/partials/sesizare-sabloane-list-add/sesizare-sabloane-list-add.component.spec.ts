import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesizareSabloaneListAddComponent } from './sesizare-sabloane-list-add.component';

describe('SesizareSabloaneListAddComponent', () => {
  let component: SesizareSabloaneListAddComponent;
  let fixture: ComponentFixture<SesizareSabloaneListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesizareSabloaneListAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesizareSabloaneListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
