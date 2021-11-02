import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesizareSabloaneListEditComponent } from './sesizare-sabloane-list-edit.component';

describe('SesizareSabloaneListEditComponent', () => {
  let component: SesizareSabloaneListEditComponent;
  let fixture: ComponentFixture<SesizareSabloaneListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesizareSabloaneListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesizareSabloaneListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
