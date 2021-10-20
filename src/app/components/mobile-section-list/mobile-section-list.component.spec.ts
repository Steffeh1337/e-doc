import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSectionListComponent } from './mobile-section-list.component';

describe('MobileSectionListComponent', () => {
  let component: MobileSectionListComponent;
  let fixture: ComponentFixture<MobileSectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
