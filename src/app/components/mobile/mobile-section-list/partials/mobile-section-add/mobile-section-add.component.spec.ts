import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSectionAddComponent } from './mobile-section-add.component';

describe('MobileSectionAddComponent', () => {
  let component: MobileSectionAddComponent;
  let fixture: ComponentFixture<MobileSectionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSectionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSectionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
