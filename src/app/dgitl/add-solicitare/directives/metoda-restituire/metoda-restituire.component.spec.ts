import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodaRestituireComponent } from './metoda-restituire.component';

describe('MetodaRestituireComponent', () => {
  let component: MetodaRestituireComponent;
  let fixture: ComponentFixture<MetodaRestituireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodaRestituireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodaRestituireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
