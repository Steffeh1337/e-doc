import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiuniComponent } from './sectiuni.component';

describe('SectiuniComponent', () => {
  let component: SectiuniComponent;
  let fixture: ComponentFixture<SectiuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectiuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectiuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
