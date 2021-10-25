import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesizareSabloaneListComponent } from './sesizare-sabloane-list.component';

describe('SesizareSabloaneListComponent', () => {
  let component: SesizareSabloaneListComponent;
  let fixture: ComponentFixture<SesizareSabloaneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesizareSabloaneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesizareSabloaneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
