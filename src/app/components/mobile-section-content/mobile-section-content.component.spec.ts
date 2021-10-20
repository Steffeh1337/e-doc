import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSectionContentComponent } from './mobile-section-content.component';

describe('MobileSectionContentComponent', () => {
  let component: MobileSectionContentComponent;
  let fixture: ComponentFixture<MobileSectionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSectionContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
